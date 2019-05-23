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
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from '../cliente/cliente-edit/cliente-edit.component';
import { CalificacionListComponent } from '../calificacion/calificacion-list/calificacion-list.component';
import { CalificacionDetailComponent } from '../calificacion/calificacion-detail/calificacion-detail.component';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { CalificacionEditComponent } from '../calificacion/calificacion-edit/calificacion-edit.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from '../medio-de-pago/create/create.component';
import { PropuestaListComponent } from '../propuesta/propuesta-list/propuesta-list.component'
import { PropuestaDetailComponent } from '../propuesta/propuesta-detail/propuesta-detail.component';
import { PropuestaCreateComponent } from '../propuesta/propuesta-create/propuesta-create.component';
import { FacturaDetailComponent } from '../factura/factura-detail/factura-detail.component';
import { FacturaCreateComponent } from '../factura/factura-create/factura-create.component';

import { ConcursoListComponent } from '../concurso/concurso-list/concurso-list.component';
import { ConcursoDetailComponent } from '../concurso/concurso-detail/concurso-detail.component';
import { ConcursoCreateComponent } from '../concurso/concurso-create/concurso-create.component';
import { ListComponent } from "../medio-de-pago/list/list.component";
import { EditComponent } from "../medio-de-pago/edit/edit.component";
import { HomeComponent } from "../home/home.component";

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
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: 'create',
                component: ClienteCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {

                    }
                }
            },

            {
                path: 'detail/:id',
                component: ClienteDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            }
        ]
    },

    {
        path: 'calificaciones',
        children: [
            {
                path: 'list',
                component: CalificacionListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {

                    }
                }
            },
            {
                path: 'create',
                component: CalificacionCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {

                    }
                }
            },
            {
                path: 'edit/:id',
                component: CalificacionEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }

            },

            {
                path: 'detail/:id',
                component: CalificacionDetailComponent,
                data: {
                    permissions: {
                        only: ['ADMIN', 'ARTISTA', 'JURADO', 'ORGANIZADOR']
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
                        component: RondaListComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['GUEST', 'CLIENT', 'ADMIN', 'ARTISTA', 'JURADO', 'ORGANIZADOR']
                            }
                        }
                    },
                    {
                        path: ':id',
                        component: RondaDetailComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['GUEST', 'CLIENT', 'ADMIN', 'ARTISTA', 'JURADO', 'ORGANIZADOR']
                            }
                        }
                    },
                    {
                        path: 'add',
                        component: RondaCreateComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['ADMIN', 'ORGANIZADOR']
                            }
                        }
                    }
                ]
            },
            {
                path: 'votaciones',
                children: [
                    {
                        path: 'list',
                        component: VotacionListComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['GUEST', 'CLIENT', 'ADMIN', 'ARTISTA', 'JURADO', 'ORGANIZADOR']
                            }
                        }

                    },
                    {
                        path: 'add',
                        component: VotacionCreateComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['ADMIN', 'JURADO']
                            }
                        }
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
                                only: ['GUEST', 'ADMIN']
                            }
                        }
                    },
                    {
                        path: 'create',
                        component: JuradoCreateComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['ADMIN', 'ORGANIZADOR']
                            }
                        }
                    },
                    {
                        path: 'detail/:id',
                        component: JuradoDetailComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['ADMIN', 'ORGANIZADOR', 'CLIENT']
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
                                only: ['ADMIN', 'ORGANIZADOR', 'CLIENT']
                            }
                        }
                    }, {
                        path: 'list',
                        component: ListComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['ADMIN', 'ORGANIZADOR', 'CLIENT']
                            }
                        }
                    },
                    {
                        path: 'detail/:id',
                        component: EditComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['ADMIN', 'ORGANIZADOR', 'CLIENT']
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
                        component: PropuestaCreateComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['CLIENT', 'ADMIN']
                            }
                        }
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
                                        component: FacturaCreateComponent,
                                        canActivate: [NgxPermissionsGuard],
                                        data: {
                                            permissions: {
                                                only: ['CLIENT', 'ADMIN']
                                            }
                                        }
                                    }
                                ],
                                canActivate: [NgxPermissionsGuard],
                                data: {
                                    permissions: {
                                        only: ['CLIENT', 'ADMIN']
                                    }
                                }
                            }
                        ],
                        canActivate: [NgxPermissionsGuard],
                        data: {
                            permissions: {
                                only: ['CLIENT', 'ADMIN']
                            }
                        }
                    }
                ],
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['CLIENT', 'ADMIN']
                    }
                }
            },
            {
                path: 'home',
                component: AuthLoginComponent
            },
            {
                path: '**',
                component: HomeComponent,
            }
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