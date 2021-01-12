import { SearchResult } from "./search-result";

export class GithubUserSearch {
  total_count?:number;
  incomplete_results?:boolean;
  items:SearchResult[]=[];
}
