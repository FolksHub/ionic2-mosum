import {NgModule} from "@angular/core";
import {JsonpModule} from "@angular/http";
import {IonicApp, IonicModule} from "ionic-angular";
import {Sql, DatabaseService, UtilService, ForecastService, AnimateItemSliding} from "../pages/providers";
import {MosumApp} from "./app.component";
import {TabsPage} from "../pages/tabs/tabs";
import {ModalLocation} from "../pages/location/location";
import {HomeWeatherPage} from "../pages/home-weather/home-weather";
import {WeatherDetailPage} from "../pages/weather-detail/weather-detail";
import {WorldWeatherPage} from "../pages/world-weather/world-weather";
import {SettingsPage} from "../pages/settings/settings";
import {WorldWeatherDetailPage} from "../pages/world-weather-detail/world-weather-detail";
import {WeatherListTemplate} from "../pages/template/weather-list.template";

@NgModule({
  declarations: [
    MosumApp,
    TabsPage,
    AnimateItemSliding,
    ModalLocation,
    HomeWeatherPage,
    WeatherDetailPage,
    WorldWeatherPage,
    SettingsPage,
    WeatherListTemplate,
    WorldWeatherDetailPage
  ],
  imports: [
    IonicModule.forRoot(MosumApp, {tabsPlacement: 'bottom'}),
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MosumApp,
    TabsPage,
    ModalLocation,
    HomeWeatherPage,
    WeatherDetailPage,
    WorldWeatherPage,
    SettingsPage,
    WeatherListTemplate,
    WorldWeatherDetailPage
  ],
  providers: [
    Sql,
    DatabaseService,
    UtilService,
    ForecastService
  ]
})
export class AppModule {
}
