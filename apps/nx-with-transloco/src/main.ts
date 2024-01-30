import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom, isDevMode } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { provideTransloco } from "@ngneat/transloco";
import { TranslocoHttpLoader } from "./transloco-http.loader";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideTransloco({
      config: {
        availableLangs: [
          {
            id: 'en',
            label: 'English',
          },
          {
            id: 'de',
            label: 'Deutsch',
          },
        ],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
}).catch((err) => console.error(err));
