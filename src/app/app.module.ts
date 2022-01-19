import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SingleSlotContentComponent } from './single-slot-content/single-slot-content.component';
import { MultiSlotContentComponent } from './multi-slot-content/multi-slot-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SingleSlotContentComponent,
    MultiSlotContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
