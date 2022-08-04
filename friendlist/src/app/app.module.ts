import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormModule } from './app.component';

@NgModule({
  declarations: [FormModule],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [FormModule],
})
export class AppModule {}
