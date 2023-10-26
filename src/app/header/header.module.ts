import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { RightHeaderModule } from '../right-header/right-header.module';
``

@NgModule({
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	],
	imports: [
		CommonModule,
		SearchBarModule,
  RightHeaderModule,
	]
})
export class HeaderModule { }
