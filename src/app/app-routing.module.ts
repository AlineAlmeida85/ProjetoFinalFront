import { BeneficiarioComponent } from './pages/beneficiario/beneficiario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { EspecialidadeComponent } from './pages/especialidade/especialidade.component';
import { HospitalComponent } from './pages/hospital/hospital.component';
import { ProfissionalComponent } from './pages/profissional/profissional.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'beneficiario', component: BeneficiarioComponent, pathMatch: 'prefix'},
  {path: 'configuracoes', component: ConfiguracoesComponent, pathMatch: 'prefix'},
  {path: 'agendamento', component: AgendamentoComponent, pathMatch: 'prefix'},
  {path: 'especialidade', component: EspecialidadeComponent, pathMatch: 'prefix'},
  {path: 'hospital', component: HospitalComponent, pathMatch: 'prefix'},
  {path: 'profissional', component: ProfissionalComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
