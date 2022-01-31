import { User } from "../entities";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findById(id: string): Promise<User | undefined> {
    const user = await this.findById(id);
    return user;
  }
}

export default UserRepository;
