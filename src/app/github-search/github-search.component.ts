import { debounce } from 'lodash';
import { GithubService } from './../services/github.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { GithubSearch } from '../models/github-search';
import { ThrowStmt } from '@angular/compiler';
import { GithubUserSearch } from '../models/github-user-search';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
  providers: [GithubService]
})
export class GithubSearchComponent implements OnInit {
  data: GithubSearch = new GithubSearch()
  userData: GithubUserSearch = new GithubUserSearch()
  dataLoading: boolean;
  type: any = "Users";
  searchText: string = ""
  total_count: number;
  constructor(public _snackBar: MatSnackBar, private fb: FormBuilder, private git: GithubService) {
    this.search = debounce(this.search, 1000)
  }
  formData: FormGroup = this.fb.group({
    title: null,
    type: ['Users', Validators.required]
  })
  ngOnInit(): void {
    // debugger
    this.formData.get('type').valueChanges.subscribe(res => {
      // debugger

      if (res == 'Users') {
        this.type = "Users"
        this.search();
      } else {
        this.type = "Repositories"
        this.search();
      }
    })
  }
  search() {
    // debugger
    this.dataLoading = true
    this.searchText = this.formData.get('title').value
    // debugger

    if (this.type == "Repositories" && this.searchText.length > 2) {
      this.git.getSearchResultRep(this.searchText).subscribe(res => {
        this.total_count = res.total_count;

        if (res && res.total_count != 0) {
          this.data = res
          this.successOpenSnackBar('Search Completed Well', '');

        }
        else if (res.total_count == 0) {
          this.warningOpenSnackBar('There is no result', '');

        }
        this.dataLoading = false
      },
        err => {
          // debugger
          this.data = null
          this.failOpenSnackBar(' An error occurred', '');
          this.dataLoading = false

        }

      );
      // debugger

    } else if (this.type == "Users" && this.searchText.length > 2) {
      this.git.getSearchResultUsers(this.searchText).subscribe(res => {
        this.total_count = res.total_count;
        if (res && res.total_count != 0) {
          this.userData = res
          this.successOpenSnackBar('Search Completed Well', '');

        }
        else if (res.total_count == 0) {
          this.warningOpenSnackBar('There is no result', '');

        }
        this.dataLoading = false

      },
        err => {
          this.userData=null
          this.failOpenSnackBar(' An error occurred', '');
          this.dataLoading = false

        }
      );
    }
  }
  failOpenSnackBar(failMessage: string, action: string) {
    this._snackBar.open(failMessage, action, {
      duration: 2000,
      panelClass: ['error-snackbar']
    });
  }
  successOpenSnackBar(successMessage: string, action: string) {
    this._snackBar.open(successMessage, action, {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }
  warningOpenSnackBar(warningMessage: string, action: string) {
    this._snackBar.open(warningMessage, action, {
      duration: 2000,
      panelClass: ['warn-snackbar']
    });
  }
}
