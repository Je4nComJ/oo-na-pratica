import { IUserRepository } from "../../domain/repository/IUserRepository";

export class DeleteUserUseCase {

    constructor(private repository: IUserRepository) {}
   
    async execute(id: string): Promise<boolean> {
        return await this.repository.delete(id);
    }
}