import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './features/front/home/home.module';
import { MainLayoutModule } from './layout/main-layout.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    MainLayoutModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      progressAnimation: 'increasing',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
