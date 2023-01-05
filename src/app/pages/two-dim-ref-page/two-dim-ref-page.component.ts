import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChooseVersion } from '../../components/choose-version/choose-version';
import { PageDataItems } from '../../components/page-data/page-data';
import { PageHeaderItems } from '../../components/page-header/page-header-items';
import { SopLinks } from '../../components/sop-links/sop-links';
import { OrganData, VersionOrgans } from '../../components/two-dim-image/two-dim-image';


interface TwoDimensionReference {
  twoDimHeaderCardDetails: PageHeaderItems[];
  overviewData: PageDataItems[];
  sopData: SopLinks[];
  termsOfUseData: PageDataItems[];
  licenseData: PageDataItems[];
  citationData: PageDataItems[];
  acknowledgmentsData: PageDataItems[];
  twoDimFtuLibObjects: PageDataItems[];
  disclaimer: PageDataItems[];
  filterImages: OrganData[];
  versionData: ChooseVersion[];
  placeholderDate: string;
  organData: OrganData[];
  info: VersionOrgans;
  version: ChooseVersion;
  organInfo: VersionOrgans[];
}

function iCaseEquals(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2.toLowerCase();
}

@Component({
  selector: 'ccf-2d-ftu',
  templateUrl: './two-dim-ref-page.component.html',
  styleUrls: ['./two-dim-ref-page.component.scss']
})
export class TwoDimRefPageComponent implements OnInit {
  data = this.route.snapshot.data['content'] as TwoDimensionReference;

  twoDimHeaderCardDetails = this.data.twoDimHeaderCardDetails;
  overviewData = this.data.overviewData;
  sopData = this.data.sopData;
  termsOfUseData = this.data.termsOfUseData;
  licenseData = this.data.licenseData;
  citationData = this.data.citationData;
  acknowledgmentsData = this.data.acknowledgmentsData;
  twoDimFtuLibObjects = this.data.twoDimFtuLibObjects;
  disclaimer = this.data.disclaimer;
  filterImages = this.data.filterImages;
  cardTitle = "";
  versionData = this.data.versionData;
  placeholderDate = this.data.placeholderDate;
  organData = this.data.organData;
  info = this.data.info;
  version = this.data.version;
  organInfo = this.data.organInfo;

  constructor(private router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const [{ version: defaultVersion, organData: [{ name: defaultOrgan }] }] = this.organInfo;
    const { version = defaultVersion, organ = defaultOrgan } = this.route.snapshot.queryParams;

    this.setVersion(`${version}`, `${organ}`);
  }

  setVersion(version: string, organ?: string): void {
    const info = this.organInfo.find(item => iCaseEquals(item.version, version)) ?? this.organInfo[0];
    const choose = this.versionData.find(item => item.version === info.version)!;
    this.info = info;
    this.version = choose;
    this.filterImages = info.organData
    this.setOrgan(organ ?? info.organData[0].name);
  }

  setOrgan(organ: string): void {
    const { info: { organData, version } } = this;
    const data = organData.filter(item => iCaseEquals(item.name, organ));

    if (data.length === 0) {
      this.setOrgan(organData[0].name);
    } else {
      this.organData = data;
      this.cardTitle = data[0].name + ' Functional Tissue Units';
      this.updateQueryParams({ version, organ });
    }
  }

  updateQueryParams(params: Params): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }
}