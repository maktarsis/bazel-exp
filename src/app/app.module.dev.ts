import { NgModule, NgModuleFactoryLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FeatureLoader } from "./app-routing.module";

@NgModule({
  imports: [AppModule],
  bootstrap: [AppComponent],
  providers: [{ provide: NgModuleFactoryLoader, useClass: FeatureLoader }]
})
export class AppModuleDev {
}
