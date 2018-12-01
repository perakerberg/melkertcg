import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardShowcaseComponent } from './card-showcase/card-showcase.component';

const routes: Routes = [
    { path: 'cards', component: CardShowcaseComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
