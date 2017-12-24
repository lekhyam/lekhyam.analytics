import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Custom Components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SidefilterComponent } from './sidefilter/sidefilter.component';

// Angular Material Components
/**
 * After Some Point do take the effort to convert Angular Material
 * in a different NgModule
 *
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    SidenavbarComponent,
    StatisticsComponent,
    SidefilterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
