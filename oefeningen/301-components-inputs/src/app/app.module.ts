// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Custom Components
import { AppComponent } from './app.component';
import { CityDetail } from './city.detail';
import { CityService } from './shared/city.service';

// Module declaration
@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, CityDetail],
  bootstrap: [AppComponent],
  providers: [CityService]
})
export class AppModule {}
