import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountInfoCard } from 'src/app/components/count-info-card/count-info-card';
import { PageDef } from 'src/app/components/page-element/page-def';
import { TileItems } from 'src/app/components/simple-tile/tile-items';
import { TileDefinition } from 'src/app/shared/simple-tile-items';
import { Announcement } from '../../components/announcement-card/announcement-card';
import { SliderItems } from '../../components/carousel/slider-items';
import { SectionCardItems } from '../../components/section-card/section-card-items';

// interface LandingPage {
//   title: string;
//   subtitle: string;
//   cardsHeading: string;
//   tileDefinition: TileItems[];
//   carouselInfo: SliderItems[]
//   cards: SectionCardItems[]
//   messages: Announcement[];
//   countCardData: CountInfoCard[];
// }

@Component({
  selector: 'ccf-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

// pagedef
export class LandingPageComponent {
  data = this.route.snapshot.data['content'] as PageDef[];
  // title = this.data.title;
  // subtitle = this.data.subtitle;
  // cardsHeading = this.data.cardsHeading;
  // carouselInfo = this.data.carouselInfo;
  // cards = this.data.cards;
  // messages = this.data.messages;
  // countCardData = this.data.countCardData;
  // definitions = this.data.tileDefinition

  constructor(private readonly route: ActivatedRoute) { }
}

//old iinterface
// export class LandingPageComponent {
//   title: string;
//   subtitle: string;
//   cardsHeading: string;
//   definitions = TileDefinition
//   carouselInfo: SliderItems[]
//   cards: SectionCardItems[]
//   messages: Announcement[];
//   countCardData: CountInfoCard[];

//   constructor(route: ActivatedRoute) { 
//     const data = route.snapshot.data['content'];
//     this.title = data.title;
//     this.subtitle = data.subtitle;
//     this.cardsHeading = data.cardsHeading;
//     this.carouselInfo = data.carouselInfo;
//     this.cards = data.cards;
//     this.messages = data.messages;
//     this.countCardData = data.countCardData;
//   }
// }
