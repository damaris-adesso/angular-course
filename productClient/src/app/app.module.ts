import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDataService } from './services/product-data.service';
import { UpdateComponent } from './components/update/update.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    FetchComponent,
    DeleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
