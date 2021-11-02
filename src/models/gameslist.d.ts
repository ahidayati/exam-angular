import {Games} from "./games";

export interface Gameslist{
  [`hydra:member`] : Array<Games>;
  [`hydra:totalItems`]: number;
  [`hydra:View`] : Array<{
    [`hydra:first`]: string;
    [`hydra:last`]: string;
    [`hydra:next`]: string;
  }>
}
