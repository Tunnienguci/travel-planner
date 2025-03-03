import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpensesComponent } from './common/expenses/expenses.component';
import { TicketComponent } from './common/ticket/ticket.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: '' }
    },
    {
        path: 'expenses',
        component: ExpensesComponent,
        data: { title: 'Trip Expenses' }
    },
    {
        path: 'ticket',
        component: TicketComponent,
        data: { title: 'My Ticket' }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'My Profile' }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
