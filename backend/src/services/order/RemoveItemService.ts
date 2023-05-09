import prismaClient from "../../prisma";

interface ItemRequest{
    orderItem_id: string;
}

class RemoveItemService{
    
    async execute({ orderItem_id }: ItemRequest){

        console.log(orderItem_id);

        const orderItem = await prismaClient.orderItem.delete({
            where:{
                id: orderItem_id
            }
        });

        return orderItem;
    }
}

export { RemoveItemService }