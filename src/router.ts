import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProducts } from "./app/useCases/products/listProducts";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { listOrders } from "./app/useCases/orders/listOrders";
import { createOrder } from "./app/useCases/orders/createOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";
import { deleteProduct } from "./app/useCases/products/deleteProduct";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      // First parameter it deals with any error with the request
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// Categories
router.get("/categories", listCategories);
router.post("/categories", createCategory);

// Products
router.get("/products", listProducts);
router.post("/products", upload.single("image"), createProduct);
router.delete("/products/:productId", deleteProduct);

// Products by Categories
router.get("/categories/:categoryId/products", listProductsByCategory);

// Orders
router.get("/orders", listOrders);
router.post("/orders", createOrder);
router.patch("/orders/:orderId", changeOrderStatus);
router.delete("/orders/:orderId", cancelOrder);
