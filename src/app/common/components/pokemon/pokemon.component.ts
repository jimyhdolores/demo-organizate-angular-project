import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() type: string;
  @Input() image: string;

  srcImage: string;
  constructor() { }

  ngOnInit(): void {
    this.srcImage = 'assets/img/' + this.image;
  }

}
