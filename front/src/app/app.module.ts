import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {HomeModule} from './home/home.module';
import {UploadComponent} from './upload/upload.component';
import {FileDropModule} from 'ngx-file-drop';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FilesComponent} from './files/files.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {SpinnerInterceptor} from './interceptor';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {ConfigComponent} from './config/config.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        UploadComponent,
        FilesComponent,
        ConfigComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        FileDropModule,
        HttpClientModule,
        NgxSpinnerModule,
        SnotifyModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
        {provide: 'SnotifyToastConfig', useValue: ToastDefaults}, SnotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}