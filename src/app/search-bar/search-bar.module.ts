import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		SearchBarComponent
	],
	exports: [
		SearchBarComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class SearchBarModule {



}
