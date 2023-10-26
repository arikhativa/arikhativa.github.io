import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightHeaderComponent } from './right-header.component';



@NgModule({
	declarations: [
		RightHeaderComponent
	],
	exports: [
		RightHeaderComponent
	],
	imports: [
		CommonModule
	]
})
export class RightHeaderModule { }
