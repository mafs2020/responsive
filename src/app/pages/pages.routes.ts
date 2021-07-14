import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';

const rutas: Routes = [
    {
        path: '', component: InicioComponent
    }
];

export const rutasPageModule = RouterModule.forChild(rutas);