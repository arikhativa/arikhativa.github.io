import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchBarModule } from '../search-bar/search-bar.module';


@NgModule({
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	],
	imports: [
		CommonModule,
		SearchBarModule
	]
})
export class HeaderModule { }
