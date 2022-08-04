import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class FormModule {
  languages = ['html', 'css', 'javascript', 'php'];
  title = 'form-component';
}
