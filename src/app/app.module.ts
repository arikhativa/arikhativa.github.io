import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { GridModule } from './grid/grid.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		HeaderModule,
		NavbarModule,
		BrowserModule,
		AppRoutingModule,
		GridModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
