import { JuradoDetailComponent } from './../jurado/jurado-detail/jurado-detail.component';
import { JuradoCreateComponent } from './../jurado/jurado-create/jurado-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';




import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ArtistaListComponent } from '../artista/artista-list/artista-list.component';
import { AnimacionListComponent } from '../animacion/animacion-list/animacion-list.component';
import { ArtistaDetailComponent } from '../artista/artista-detail/artista-detail.component';
import { AnimacionDetailComponent } from '../animacion/animacion-detail/animacion-detail.component';
import { ArtistaCreateComponent } from '../artista/artista-create/artista-create.component';
import { AnimacionCreateComponent } from '../animacion/animacion-create/animacion-create.component';
import { RondaListComponent } from '../ronda/ronda-list/ronda-list.component';
import { VotacionListComponent } from '../votacion/votacion-list/votacion-list.component';
import { RondaDetailComponent } from '../ronda/ronda-detail/ronda-detail.component';
import { RondaCreateComponent } from '../ronda/ronda-create/ronda-create.component';
import { VotacionCreateComponent } from '../votacion/votacion-create/votacion-create.component';
import { JuradoListComponent } from '../jurado/jurado-list/jurado-list.component';
import {ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from '../cliente/cliente-edit/cliente-edit.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from '../medio-de-pago/create/create.component';
import { PropuestaListComponent} from '../propuesta/propuesta-list/propuesta-list.component'
import {PropuestaDetailComponent} from '../propuesta/propuesta-detail/propuesta-detail.component';
import {PropuestaCreateComponent} from '../propuesta/propuesta-create/propuesta-create.component';
import {FacturaDetailComponent} from '../factura/factura-detail/factura-detail.component';
import {FacturaCreateComponent} from '../factura/factura-create/factura-create.component';

import {ConcursoListComponent} from '../concurso/concurso-list/concurso-list.component';
import {ConcursoDetailComponent} from '../concurso/concurso-detail/concurso-detail.component';
import {ConcursoCreateComponent} from '../concurso/concurso-create/concurso-create.component';

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
            },
            {
                path: 'add',
                component: ArtistaCreateComponent
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
            },
            {
                path: 'add',
                component: AnimacionCreateComponent
            }
        ]
    },
    {
        path: 'rondas',
        children: [
            {
                path: 'list',
                component: RondaListComponent
            },
            {
                path: ':id',
                component: RondaDetailComponent
            },
            {
                path: 'add',
                component: RondaCreateComponent
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
             },
             {
                 path: 'add',
                 component: AnimacionCreateComponent
             }
         ]
     },

     {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'create',
                component: ClienteCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'edit/:id',
                component: ClienteEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
                
            },
          
            {
                path: 'detail/:id',
                component:ClienteDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },

     {
         path: 'rondas',
         children: [
                {
                    path: 'list',
                    component: RondaListComponent
                },
                {
                    path: ':id',
                    component: RondaDetailComponent
                },
                {
                    path: 'add',
                    component: RondaCreateComponent
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
            },
            {
                path: 'add',
                component: AnimacionCreateComponent
            }
        ]
    },
    {
        path: 'rondas',
        children: [
            {
                path: 'list',
                component: RondaListComponent
            },
            {
                path: ':id',
                component: RondaDetailComponent
            },
            {
                path: 'add',
                component: RondaCreateComponent
            }
        ]
    },
    {
        path: 'votaciones',
        children: [
            {
                path: 'list',
                component: VotacionListComponent
            },
            {
                path: 'add',
                component: VotacionCreateComponent
            }
        ]
    }
    ,
    {
        path: 'concursos',
        children: [{
            path: 'list',
            component: ConcursoListComponent
        },
        {
            path: ':id',
            component: ConcursoDetailComponent,
            outlet: 'detail'
        },
        {
            path: 'create',
            component: ConcursoCreateComponent
        }
        ]
    },
    {
        path: 'jurados',
        children: [
            {
                path: 'list',
                component: JuradoListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'create',
                component: JuradoCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'detail/:id',
                component: JuradoDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]

    },
    {
        path: 'mediodepago',
        children: [
            
            {
                path: 'create',
                component: CreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            
        ]

    },
    {
        path: 'propuestas',
        component: PropuestaListComponent,
        children: [
          {
            path: 'create',
            component: PropuestaCreateComponent
          },
          {
            path: ':id',
            component: PropuestaDetailComponent,
            children: [
              {
                path: 'factura',
                component: FacturaDetailComponent,
                children: [
                  {
                    path: 'createF',
                    component: FacturaCreateComponent
                  }
                ]
              }
            ]
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
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
