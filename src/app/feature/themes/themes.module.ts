import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemesDetailPageComponent } from './themes-detail-page/themes-detail-page.component';
import { ThemesNewPageComponent } from './themes-new-page/themes-new-page.component';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemesRoutingModule } from './themes-routing.module';


@NgModule({
  declarations: [
    AsideComponent,
    PostListComponent,
    ThemeListItemComponent,
    ThemeListComponent,
    ThemesDetailPageComponent,
    ThemesNewPageComponent,
    ThemesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemesRoutingModule
  ]
})
export class ThemesModule { }
