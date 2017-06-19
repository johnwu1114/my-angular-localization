import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LocalizationPipe } from "./shared/localization.pipe";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        LocalizationPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);