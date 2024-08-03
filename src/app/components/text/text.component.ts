import { Component } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";

@Component({
  selector: 'demo-text',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {

}
