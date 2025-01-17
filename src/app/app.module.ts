import { HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomToolbarModule } from './components/bottom-toolbar/bottom-toolbar.module';
import { PageRendererModule } from './components/page-renderer/page-renderer.module';
import { PageModule } from './components/page/page.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { TissueInfoPageModule } from './pages/tissue-info-page/tissue-info-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    BottomToolbarModule,
    AppRoutingModule,
    HttpClientModule,
    TissueInfoPageModule,
    NgxGoogleAnalyticsModule.forRoot(environment.googleAnalyticsToken),
    NgxGoogleAnalyticsRouterModule,
    MarkdownModule.forRoot({ sanitize: SecurityContext.NONE }),
    PageRendererModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
