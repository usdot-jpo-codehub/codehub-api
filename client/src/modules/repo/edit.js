import {inject} from "aurelia-framework";
import {RepoDetail} from "./repoDetail";
import {Router} from "aurelia-router";
//import {Validation} from "aurelia-validation";

@inject(RepoDetail, Router)
export class Edit {

  constructor(data, router) {
    this.data = data;
    this.router = router;
  }

  cancel(){
    //this.repo = this.original;
    return this._loadRepo(this.repo.id);
  }

  goBack(){
    window.history.back();
  }

  activate(params) {
    this.original = {};
    this.repo = {};

    if (params.id) {
       return this._loadRepo(params.id);
    }
  }
  _loadRepo(id){
    return this.data.getById(id)
        .then(repo => {
          this.original = JSON.parse(JSON.stringify(repo));
          return this.repo = repo;
        });
  };

  get isUnchanged(){
    return this.areEqual(this.repo, this.original);
  }
  save() {
    this.data.save(this.repo)
      .then(repo => {
        this.original = JSON.parse(JSON.stringify(repo));
        this.router.navigate("list");
      });
  };
  areEqual(obj1, obj2) {
  return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
};
}
