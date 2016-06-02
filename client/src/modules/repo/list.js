import {inject} from 'aurelia-framework';
import {RepoDetail} from "./repoDetail";
import {Router} from "aurelia-router";
@inject(RepoDetail, Router)
export class List {
  heading = 'Repositories List';

  repos = [];

  constructor(data, router) {
    this.service = data;
    this.currentPage = 0;
    this.router = router;
  };

  gotoRepo(repo){
    this.router.navigateToRoute('edit', { id: repo.id })
  };

  new(){
    this.router.navigateToRoute('create');
  };

  getData() {
    //implement spinner

    this.currentPage++;
    return this.service.getAll()
      .then(repos => {
       this.repos = repos;

     });

  }

  activate() {
    console.log(this.getData);
    return this.getData();
  }
}
