import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { App1SharedModule } from '../../../core/src/app/app.module';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { CoreApplicationComponent } from './core-application/core-application.component';
import { LibraryComponent } from './library/library.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonLibraryModule } from '@assessment/common-library'

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    SharedComponentComponent,
    CoreApplicationComponent,
    LibraryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, App1SharedModule.forRoot(), CommonLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
