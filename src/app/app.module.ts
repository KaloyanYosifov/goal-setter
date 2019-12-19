import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HobbyCreateComponent } from './hobbies/hobby-create/hobby-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HobbyCreateComponent,
    ],
    imports: [
        BrowserModule,
        PagesModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
