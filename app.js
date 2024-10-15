const express = require("express");
const app = express();
const cors = require('cors');
const api_routes = require("./routes/index");

// Compartir la carpeta 'public' para servir archivos estáticos (imágenes, etc.)
app.use(express.static('public'));

// Configuración de CORS
const allowedOrigins = [
    'http://localhost:5173',  // Origen local para desarrollo
    'https://frontend-ricci-2.onrender.com'  // Origen de producción en Render
];

app.use(cors({
    origin: function (origin, callback) {
        // Permitir el origen si está en la lista de permitidos o si no hay origen (caso de ciertas solicitudes)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Middleware para interpretar datos JSON en el body de las peticiones
app.use(express.json());

// Usar las rutas definidas en index.js
app.use("/api", api_routes);

module.exports = app;
