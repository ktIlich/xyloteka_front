import {UserRole} from './UserRole.model';

export class User {
  id?: any;
  username?: string;
  email?: string;
  password?: string;
  firstName?: string;
  secondName?: string;
  lastName?: string;
  organization?: string;
  phone?: string;
  about?: string;
  roles?: Array<any>;

  constructor() {
  }
}
