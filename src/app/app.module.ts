import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsetComponent } from './skillset/skillset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadSectionComponent,
    AboutMeComponent,
    SkillsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
