import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, OnSalePipe, PageNotFoundComponent, HighLightDirective, TemplatedrivenformComponent, ReactiveFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
