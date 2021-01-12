
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubSearch } from '../models/github-search';
import { debounce } from 'lodash';
import { GithubUserSearch } from '../models/github-user-search';

@Injectable()
export class GithubService {
    constructor(private httpClient: HttpClient) {
    }

    getSearchResultRep(title: string) {
        // debugger
        let _queryParams: HttpParams = new HttpParams();
        if (title != "" && title.length > 2) {
            _queryParams = _queryParams.append("q", title);
            return this.httpClient.get<GithubSearch>("https://api.github.com/search/repositories", { params: _queryParams });
        }
    }
    getSearchResultUsers(title: string) {
        //  debugger
        let _queryParams: HttpParams = new HttpParams();
        if (title != "" && title.length > 2) {
            _queryParams = _queryParams.append("q", title);
            return this.httpClient.get<GithubUserSearch>("https://api.github.com/search/users", { params: _queryParams });
        }
    }
}
