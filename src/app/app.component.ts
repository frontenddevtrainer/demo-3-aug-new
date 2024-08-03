import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from "./components/heading/heading.component";
import { TextComponent } from "./components/text/text.component";

@Component({
  selector: 'demo-root',
  standalone: true,
  imports: [RouterOutlet, HeadingComponent, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-3-aug';
}
