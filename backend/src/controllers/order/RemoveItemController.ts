import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController{
    async handle(req: Request, res: Response){

        const orderItem_id = req.query.orderItem_id as string;

        const removeItemService = new RemoveItemService();

        const orderItem = await removeItemService.execute({
            orderItem_id
        });

        return res.json(orderItem);

    }
}

export { RemoveItemController }