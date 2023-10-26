import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-vid',
	templateUrl: './vid.component.html',
	styleUrls: ['./vid.component.scss']
})
export class VidComponent {
	@Input() name: string = "";
	@Input() user: string = "";
	@Input() views: string = "";
	@Input() thumbnailPath: string = "";
	@Input() channelPath: string = "";
}
