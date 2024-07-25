import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {NgxComponent} from "@kouji/ngx";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgxComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kouji';
}
