import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PropertyComponent } from './components/property/property.component';
import { AddPropComponent } from './components/add-prop/add-prop.component';
import { PropItemComponent } from './components/prop-item/prop-item.component';
import { AddFormComponent } from './components/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyComponent,
    AddPropComponent,
    PropItemComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
