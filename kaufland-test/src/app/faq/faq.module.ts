import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqListComponent } from './faq-list/faq-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FaqListComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class FaqModule { }
