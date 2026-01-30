import { User } from "../../domain/entity/User";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class CreateUserUseCase {
   
    async execute(dto: CreateUserDTO): Promise<User> {
        
        const user = new User(
            dto.id, 
            dto.name, 
            dto.email, 
            dto.password
        );
        
        return user;
    }
}