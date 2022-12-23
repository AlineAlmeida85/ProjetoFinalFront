import { Component , Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit{
  @Input()
  cardPhoto1: string = "https://icon-library.com/images/agenda-icon-png/agenda-icon-png-10.jpg"
  @Input()
  cardTitle1: string = "Agendamento"
  @Input()
  cardDescription1: string = "" /* Agende escolhendo o melhor dia e horário pra você. */

  @Input()
  cardPhoto2: string = "https://cdn.icon-icons.com/icons2/2489/PNG/512/doctor_icon_150126.png"
  @Input()
  cardTitle2: string = "Especialidade"
  @Input()
  cardDescription2: string = ""/*Sua Especialidade a um clique de distância.  */

  @Input()
  cardPhoto3: string = "https://static.vecteezy.com/system/resources/previews/014/322/467/non_2x/hospital-thin-line-icon-hospital-icon-set-png.png"
  @Input()
  cardTitle3: string = "Hospitais"
  @Input()
  cardDescription3: string = ""/* Procure pelo Hospital mais próximo de você para fazer seus agendamentos. */

  @Input()
  cardPhoto4: string = "https://cdn-icons-png.flaticon.com/512/6351/6351302.png"
  @Input()
  cardTitle4: string = "Profissionais"
  @Input()
  cardDescription4: string = ""/*Nossos profissionais estão sempre à disposição.  */

  constructor() {}

  ngOnInit(): void {

  }
}
