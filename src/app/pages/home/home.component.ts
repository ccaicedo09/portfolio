import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, ProjectsComponent, AboutMeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
