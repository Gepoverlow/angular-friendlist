import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  languages = ['html', 'css', 'javascript', 'php'];

  constructor() {}

  ngOnInit(): void {}
}
