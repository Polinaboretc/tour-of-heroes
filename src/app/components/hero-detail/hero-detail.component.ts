import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id!).subscribe({
      next: (eroe) => this.hero = eroe,
      error: (err) => console.log(err)
    })
  }

  goBack(): void {
    this.location.back();

  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe({
        next: () => this.goBack(),
        error: (err: any) => console.log(err)
      });
    }
  }



}
