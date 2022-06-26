import { Component, OnInit } from '@angular/core';
import { date } from 'joi';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
