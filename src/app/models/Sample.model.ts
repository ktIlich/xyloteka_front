import {Division} from './Division.model';
import {Classis} from './Classis.model';
import {Ordo} from './Ordo.model';
import {Family} from './Family.model';
import {Species} from './Species.model';
import {Genus} from './Genus.model';
import {BotanicDescription} from './BotanicDescription.model';
import {User} from './User.model';
import {Names} from './Names.model';

export class Sample {
  id?: any;
  botanicDescription?: BotanicDescription;
  place?: string;
  whoCollect?: User;
  whoDefine?: User;
  trade?: boolean;
  collectDate?: Date;
  description?: string;
  names?: Names;
  approve?: boolean;

  constructor() {
  }
}
