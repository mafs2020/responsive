import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearComponent } from './crear/crear.component';

const rutas: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: InicioComponent },
            { path: 'crear', component: CrearComponent }
        ]
    },
];

export const rutasPageModule = RouterModule.forChild(rutas);