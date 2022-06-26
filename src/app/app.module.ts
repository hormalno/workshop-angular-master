import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './feature/pages/pages.module';
import { ThemesModule } from './feature/themes/themes.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AuthModule,
    PagesModule,
    ThemesModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
