import { environment } from './../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { TodosModule } from './todos/todos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// NGRX
import { todoReducer } from './store/reducers/todo.reducers';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    TodosModule,
    StoreModule.forRoot(appReducers),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
