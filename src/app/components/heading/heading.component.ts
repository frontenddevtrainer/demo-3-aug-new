import { Component, Input } from '@angular/core';
import { TextComponent } from "../text/text.component";

@Component({
  selector: 'demo-heading',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input() text: string = "";
}
