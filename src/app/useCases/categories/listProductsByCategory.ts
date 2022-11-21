import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const product = await Product.find().where("category").equals(categoryId);

    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
