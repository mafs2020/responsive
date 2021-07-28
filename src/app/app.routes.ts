import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
    {
        path: 'inicio',
        loadChildren: async () =>  ( await import('./pages/pages.module') ).PagesModule
    },
    {
        path: 'login',
        loadChildren: async () => ( await import( './login/login.module' ) ).LoginModule
    },
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];


export const rutasModuleRoot = RouterModule.forRoot(rutas);