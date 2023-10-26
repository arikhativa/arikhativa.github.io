import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VidComponent } from './vid.component';



@NgModule({
	declarations: [
		VidComponent
	],
	exports: [
		VidComponent
	],
	imports: [
		CommonModule
	]
})
export class VidModule { }
