import express from "express";
import path from "path";

const router = express.Router();

//admin
router.use('/admin', express.static(path.join(__dirname, '/admin')));
router.all('/admin/*', (req, res) => res.sendFile(path.join(__dirname, 'admin', 'index.html')));

//normal
router.use('/', express.static(path.join(__dirname, '/public')));
router.all('/*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

export default router;