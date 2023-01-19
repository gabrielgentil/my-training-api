import { uuid } from 'uuidv4'
import bcrypt from 'bcryptjs'

export class User {

  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }

    const saltRounds = 10
    this.password = bcrypt.hashSync(props.password, saltRounds);
  }
}