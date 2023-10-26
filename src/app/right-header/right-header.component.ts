import { Component } from '@angular/core';

@Component({
	selector: 'app-right-header',
	templateUrl: './right-header.component.html',
	styleUrls: ['./right-header.component.scss']
})
export class RightHeaderComponent {
	vidImgPath = "/assets/svg/upload.svg"
	appsImgPath = "/assets/svg/youtube-apps.svg"
	bellImgPath = "/assets/svg/notifications.svg"
	profileImgPath = "/assets/profile/my-channel.jpeg"
}
