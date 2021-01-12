import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubSearchComponent } from './github-search/github-search.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
