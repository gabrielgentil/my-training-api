import { uuid } from 'uuidv4'
import { ICreateCategoryRequestDTO } from '../../usecases/CreateCategoryUseCase/createCategoryDTO';

export class Category {

  public readonly id: string;

  public name: string;
  public userId: string;
  public createdBy: string;

  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  public static validate(props: ICreateCategoryRequestDTO) {
    if (!props.createdBy && !props.name && !props.userId) {
      return false
    }

    if (props.name.trim().length < 2 || props.name.trim().length > 256) {
      return false
    }

    return true
  }
}