import { SafeResourceUrl } from "@angular/platform-browser";

export class Search{
    owner?: {avatar_url: string,login :string};
    name?: string;
    full_name ?: string;
    description? :string;
    html_url ?:number;
    size?:number;
    forks_counts?:number;
    language?:string;
}
