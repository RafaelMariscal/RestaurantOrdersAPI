import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProducts(req: Request, res: Response) {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
