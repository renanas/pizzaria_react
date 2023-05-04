import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CreateUserRequest{
    name: string,
    email: string,
    password: string,
}

class CreateUserService{
    async execute({ name, email, password }: CreateUserRequest){

        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExist = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        });

        if(userAlreadyExist){
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
        });

        return user;
    }
}

export { CreateUserService };