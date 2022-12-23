import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';
import { BeneficiarioComponent } from './pages/beneficiario/beneficiario.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { EspecialidadeComponent } from './pages/especialidade/especialidade.component';
import { HospitalComponent } from './pages/hospital/hospital.component';
import { ProfissionalComponent } from './pages/profissional/profissional.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    HomeComponent,
    BeneficiarioComponent,
    ConfiguracoesComponent,
    AgendamentoComponent,
    EspecialidadeComponent,
    HospitalComponent,
    ProfissionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
