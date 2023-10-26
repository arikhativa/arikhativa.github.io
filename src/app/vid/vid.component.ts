import { Component, Inject } from '@angular/core';

@Inject() {

}
@Component({
	selector: 'app-vid',
	templateUrl: './vid.component.html',
	styleUrls: ['./vid.component.scss']
})
export class VidComponent {
	name: string;
	// 	let name: string;
	// user: string;
	// views: string;
	// thumbnailPath: string;
	// channelPath: string;
	constructor(name: string) {
		this.name = name;
	}

}
