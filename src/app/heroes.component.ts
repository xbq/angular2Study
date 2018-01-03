import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit {
  //这个地方和传统的class不一样，构造函数里面的形参可以直接被当做类的私有字段来使用
  constructor(
    private heroService: HeroService,
    private router: Router) { }
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
