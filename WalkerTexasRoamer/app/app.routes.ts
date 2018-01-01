import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//WalkerTexasRoamer/test/coolThing1

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeLayoutComponent }, 
    { path: 'test', loadChildren: './app/some_module_here/my-new.module' }   
    { path: '**', redirectTo: 'home' }
 ];

export const routingComponents = [
    FirstComponent, SecondComponent, ThirdComponent
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class PrimaryAppRoutingModule { }