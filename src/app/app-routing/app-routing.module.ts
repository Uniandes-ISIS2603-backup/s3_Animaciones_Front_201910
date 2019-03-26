import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ArtistaListComponent } from '../artista/artista-list/artista-list.component';
import { AnimacionListComponent } from '../animacion/animacion-list/animacion-list.component';
import { ArtistaDetailComponent } from '../artista/artista-detail/artista-detail.component';
import { AnimacionDetailComponent } from '../animacion/animacion-detail/animacion-detail.component';

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ],
     },
    {
         path: 'artistas',
         children: [
             {
                 path: 'list',
                 component: ArtistaListComponent
             },
             {
                 path: ':id',
                 component: ArtistaDetailComponent
             }
         ]
     },
    {
         path: 'animaciones',
         children: [
             {
                 path: 'list',
                 component: AnimacionListComponent
             },
             {
                 path: ':id',
                 component: AnimacionDetailComponent
             }
         ]
     },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
