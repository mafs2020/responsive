import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
    {
        path: 'inicio',
        loadChildren: async () => (await (await import('./pages/pages.module')).PagesModule)
    },
    {
        path: '**', redirectTo: 'inicio', pathMatch: 'full'
    }
];


export const rutasModuleRoot = RouterModule.forRoot(rutas);