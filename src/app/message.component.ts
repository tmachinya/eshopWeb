import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-message',
    styleUrls: ['./message.component.css'],
    templateUrl: './message.component.html'
})

export class MessageComponent {

    @Input() error: any;
    @Input() success: any;
    @Input() allowClose = false;
    @Output() close = new EventEmitter<void>();

}
