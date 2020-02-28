import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  
 @Input() heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService
    ) { }


  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(
      params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
        console.log(this.heroes);
      }
  )
}
}