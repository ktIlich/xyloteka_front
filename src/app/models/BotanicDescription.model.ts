import {Division} from "./Division.model";
import {Classis} from "./Classis.model";
import {Ordo} from "./Ordo.model";
import {Family} from "./Family.model";
import {Species} from "./Species.model";
import {Genus} from "./Genus.model";

export class BotanicDescription {
  id?: any;
  divisio?: Division;
  classis?: Classis;
  ordo?: Ordo;
  family?: Family;
  genus?: Genus;
  species?: Species;

  constructor() {
  }
}
