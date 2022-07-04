import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Title, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-shop';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,){
    this.registerIcons();
  }

  registerIcons() {
    const icons = [
      'book'
    ];

    icons.forEach(i => {
      this.matIconRegistry.addSvgIcon(
        i,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/svg/${i}.svg`
        )
      );
    });
  }
}
