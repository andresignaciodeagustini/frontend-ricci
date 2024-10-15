import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { faBagShopping, faEye } from "@fortawesome/free-solid-svg-icons"; 
import { useOrder } from "../../context/OrderContext.jsx";

export default function ProductCard({ product }) {
  const { addOrderItem } = useOrder();
  const [heartActive, setHeartActive] = useState(false);

  const handleHeartClick = () => {
    setHeartActive(!heartActive);
    addOrderItem(product); 
  };

  return (
    <article className="product-card">
      <div className="card-header">
        <div className="product-image">
          <img 
            src={`${import.meta.env.VITE_IMAGES_URL}/products/${product.image}`} 
            alt={product.name} 
          />
          <div className="button-container">
            <Link className="btn-icon btn-icon-eye" to={`/product-detail/${product._id}`}>
              <FontAwesomeIcon 
                icon={faEye} 
                title="Ver más"
              />
            </Link>
            <button
              className={`btn-icon btn-icon-bag ${heartActive ? 'active' : ''}`}
              onClick={handleHeartClick}
            >
              <FontAwesomeIcon icon={faBagShopping} /> 
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="product-name">
          <a href="#">{product.name}</a>
        </div>
        <div className="product-price">
          $ {product.price}
        </div>
      </div>
     
    </article>
  );
}
