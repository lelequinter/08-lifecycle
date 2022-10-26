import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombres',
  templateUrl: './muestra-nombres.component.html',
  styles: [
  ]
})
export class MuestraNombresComponent implements OnInit, OnChanges {

  @Input() nombre!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit(): void {
  }

}
