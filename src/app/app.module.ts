import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { ExportDialogComponent } from './result/export-dialog/export-dialog.component';
import { IpcService } from './services/ipc/ipc.service';
import { DatabaseDialogComponent } from './database-dialog/database-dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    ExportDialogComponent,
    DatabaseDialogComponent,
    ToolbarComponent
  ],
  entryComponents: [ExportDialogComponent, DatabaseDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [IpcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
