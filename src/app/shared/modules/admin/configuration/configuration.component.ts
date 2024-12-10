import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppConfig } from 'src/app/app-config';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  // public method
  styleSelectorToggle!: boolean; // open configuration menu
  setFontFamily!: string; // fontFamily

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setFontFamily = AppConfig.font_family;
    this.fontFamily(this.setFontFamily);
  }

  fontFamily(font: string) {
    this.setFontFamily = font;
    this.renderer.removeClass(document.body, 'Roboto');
    this.renderer.removeClass(document.body, 'Poppins');
    this.renderer.removeClass(document.body, 'Inter');
    this.renderer.addClass(document.body, font);
  }
}
