import {User} from './User.model';
import {Sample} from './Sample.model';
import {Status} from './Status.model';

export class TradeOffer {
  id?: any;
  whoRequest?: User;
  whatAsk?: Sample;
  whatOffer?: Sample;
  description?: string;
  status?: Status;


  constructor() {
  }
}
