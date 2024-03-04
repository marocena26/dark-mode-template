import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checked: boolean = true;
  selectedTheme: string = 'dark';
  themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.setTheme(this.selectedTheme);
  }

  onThemeChange(theme: string): void {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }
}
