import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const helloModule = '../features/hello-world/hello-world.module#HelloWorldModule';
export const todosModule = '../features/todos/todos.module#TodosModule';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: helloModule },
  { path: 'todos', pathMatch: 'full', loadChildren: todosModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
