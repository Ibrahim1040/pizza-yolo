import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { DetailComponent } from './routes/detail/detail.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

const routes: Routes = [{
    path: "home",
    component: HomeComponent
},
{
    path: "detail",
    component: DetailComponent
},
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: '**',
    component: NotFoundComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}