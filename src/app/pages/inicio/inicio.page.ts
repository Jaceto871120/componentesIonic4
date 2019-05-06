import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'albums',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'add-circle',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid - Row',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'InfiniteScroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'keypad',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'Listas Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder',
      name: 'Listas - Reorder',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirectTo: '/loading'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
