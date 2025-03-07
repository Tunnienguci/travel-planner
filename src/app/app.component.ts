import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CalendarComponent } from "./common/calendar/calendar.component";
import { HeroComponent } from "./common/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, NavbarComponent, CalendarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'travel-planner';
}
