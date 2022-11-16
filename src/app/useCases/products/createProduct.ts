import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, description, price, category, ingredients } = req.body;
    const imagePath = req.file?.fieldname;
    console.log({ name, description, price, category, ingredients });
    const product = await Product.create({
      category,
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : []
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
