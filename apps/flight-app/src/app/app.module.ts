import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { configureLegacyApp, upgradedComponents } from '../legacy-app-setup';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [AppComponent, ...upgradedComponents],
  imports: [BrowserModule, NxModule.forRoot(), UpgradeModule],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(): void {
    configureLegacyApp(this.upgrade.injector);
    this.upgrade.bootstrap(document.body, ['downgraded', 'legacyApp']);
  }
}
