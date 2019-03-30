import { NgModule, NgModuleFactory, NgModuleFactoryLoader } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldModuleNgFactory } from '../features/hello-world/hello-world.module.ngfactory';
import { TodosModuleNgFactory } from '../features/todos/todos.module.ngfactory';

const modules = {
  helloWorld: '../features/hello-world/hello-world.module#HelloWorldModule',
  todos: '../features/todos/todos.module#TodosModule'
};

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: modules.helloWorld },
  { path: 'todos', pathMatch: 'full', loadChildren: modules.todos }
];

export class FeatureLoader extends NgModuleFactoryLoader {
  public load(id: string):Promise<NgModuleFactory<{}>> {
    switch (id) {
      case modules.helloWorld:
        return Promise.resolve(HelloWorldModuleNgFactory);
      case modules.todos:
        return Promise.resolve(TodosModuleNgFactory);
      default:
        throw new Error(`Unrecognized route id ${id}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
