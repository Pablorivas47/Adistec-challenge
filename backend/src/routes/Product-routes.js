import express from 'express';
import { addProduct, getProduct,deleteProduct } from '../controllers/Product-controller.js';

const router = express.Router();

router.get('/', getProduct);
router.post('/', addProduct);
router.delete('/:productId', deleteProduct);

export default router;