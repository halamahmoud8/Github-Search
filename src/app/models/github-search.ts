import {Search} from "./search";

export class GithubSearch {
  total_count?:number;
  incomplete_results?:boolean;
  items:Search[]=[];
}
