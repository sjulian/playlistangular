import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';

import { SessionService} from './session.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([

        {
          path:'inicio',
          component:InicioComponent
        },
        {
          path:'login',
          component:RegistroComponent
        },
        {
          path:'registro',
          component:RegistroComponent
        },
        {
          path: '',
          redirectTo: '/inicio',
          pathMatch: 'full'
        }
    ])
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
