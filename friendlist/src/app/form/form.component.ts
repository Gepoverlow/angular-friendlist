import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  languages: Array<string> = ['html', 'css', 'javascript', 'php'];
  friendModel = new Friend('', '', '', '', '');

  constructor() {}

  ngOnInit(): void {}
}
