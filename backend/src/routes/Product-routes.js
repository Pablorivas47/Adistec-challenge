import express from 'express';
import { addProduct, getProduct,deleteProduct, updateProduct } from '../controllers/Product-controller.js';

const router = express.Router();

router.get('/', getProduct);
router.post('/', addProduct);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);

export default router;