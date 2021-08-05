import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { InicioComponent } from './inicio/inicio.component';
import { OtroComponent } from './otro/otro.component';

const rutas: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: InicioComponent },
            { path: 'otro', component: OtroComponent }
        ]
    },
];

export const rutasPageModule = RouterModule.forChild(rutas);