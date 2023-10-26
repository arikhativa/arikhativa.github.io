import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { VidModule } from '../vid/vid.module';



@NgModule({
	declarations: [
		GridComponent
	],
	exports: [
		GridComponent
	],
	imports: [
		CommonModule,
  VidModule
	]
})
export class GridModule { }
