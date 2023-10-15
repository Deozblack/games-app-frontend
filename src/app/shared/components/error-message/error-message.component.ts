import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() form!: FormGroup;
  @Input() field!: string;
}
