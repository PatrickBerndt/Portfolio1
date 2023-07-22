import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupMenuComponent } from './popup-menu/popup-menu.component'


@NgModule({
  declarations: [
    AppComponent,
    HeadSectionComponent,
    AboutMeComponent,
    SkillsetComponent,
    MyWorkComponent,
    ContactFormComponent,
    FooterComponent,
    PopupMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
