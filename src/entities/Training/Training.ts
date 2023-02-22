import { uuid } from 'uuidv4'

export class Training {

  public readonly id: string;

  public name: string;
  public repetitions: string;
  public series: string;
  public categorysId: string;

  constructor(props: Omit<Training, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}