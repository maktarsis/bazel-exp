import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const helloModuleId = '../features/hello-world/hello-world.module#HelloWorldModule';
export const todosModuleId = '../features/todos/todos.module#TodosModule';

// These are lazy-loaded routes - note that we don't import the modules here
// to avoid having an eager dependency on them.
const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: helloModuleId},
  {path: 'todos', pathMatch: 'full', loadChildren: todosModuleId},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
