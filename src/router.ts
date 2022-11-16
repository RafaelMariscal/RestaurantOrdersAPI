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

// List categories
router.get("/categories", listCategories);

// Create categories
router.post("/categories", createCategory);

// List products
router.get("/products", listProducts);

// Create product  --> the upload single parameter it is the 'key'.
router.post("/products", upload.single("image"), createProduct);

// Get products by category
router.get("/categories/:categoryId/products", listProductsByCategory);

// List orders
router.get("/orders", listOrders);

// Create order
router.post("/orders", createOrder);

// Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("Ok");
});

// Delete/cancel order (Soft delete)
router.delete("/orders/:orderId", (req, res) => {
  res.send("Ok");
});
