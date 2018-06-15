import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserSearchService } from './services/user-search.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ UserSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
