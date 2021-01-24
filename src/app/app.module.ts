import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FabricCanvasComponent } from './fabric-canvas/fabric-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    FabricCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
