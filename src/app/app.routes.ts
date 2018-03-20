import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LeadsComponent } from './leads/leads.component';

export const router: Routes = [
    { 
        path: '', 
        redirectTo: 'leads', 
        pathMatch: 'full' 
    },
    { 
        path: 'leads', 
        component: LeadsComponent 
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);