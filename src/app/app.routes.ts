import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreditsComponent } from './pages/credits/credits.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'creditos', component: CreditsComponent},
    {path: '**', redirectTo: ''}
];
