import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageDef } from 'src/app/components/page-element/page-def';
import { LongCard } from '../../components/card-button-long/long-card';
import { TileItems } from '../../components/simple-tile/tile-items';

export interface Overview {
  pageTitle: string;
  description: TileItems[];
  longButtonItems: LongCard[];
}

@Component({
  selector: 'overview-data',
  templateUrl: './overview-data.component.html',
  styleUrls: ['./overview-data.component.scss']
})
export class OverviewDataComponent {
  data = this.route.snapshot.data['content'] as PageDef[];

  constructor(private router: Router, private readonly route: ActivatedRoute) { }

  clicked(card: LongCard): void {
    this.router.navigate([card.route])
  }
}
