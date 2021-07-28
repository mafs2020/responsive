import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const rutas: Routes = [
    { path: '',  component: LoginComponent }
];

export const rutasLoginModule = RouterModule.forChild(rutas);