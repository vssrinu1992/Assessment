import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from 'apps/core/src/app/app.component';
import { LibraryComponent } from './library/library.component';
import { SharedComponentComponent } from './shared-component/shared-component.component';

const routes: Routes = [
    { path: 'sharedComponent', component: SharedComponentComponent },
    { path: 'coreApplication', component: AppComponent },
    { path: 'library', component: LibraryComponent }

];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }