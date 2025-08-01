import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        loadComponent: () => import("./login/login").then((m) => m.Login)
    },
    {
        path: 'signup',
        loadComponent: () => import("./signup/signup").then((m) => m.Signup)
    },
    {
        path: 'usermessage',
        loadComponent: () => import("./usermessage/usermessage").then ((m) => m.UserMessage)
    }

];
