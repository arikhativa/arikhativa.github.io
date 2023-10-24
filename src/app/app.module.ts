import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		HomeModule,
		HeaderModule,
		NavbarModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
