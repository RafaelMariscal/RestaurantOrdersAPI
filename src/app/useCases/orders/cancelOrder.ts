import { NextFunction, Request, Response } from "express";

import { Order } from "../../models/Order";

export async function cancelOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndDelete(orderId);

    return res.sendStatus(204);
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
