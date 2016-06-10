import {inject} from "aurelia-framework";
import {SearchProjectData} from "./searchProjectData";
import {Router} from "aurelia-router";
import {bindable} from 'aurelia-framework';

//import {Validation} from "aurelia-validation";

@inject(SearchProjectData, Router)
export class SearchProject {
  //projects = ["dfgfd","gdfgdg","4564564"];
  searchText = '';
  projects = [];
  constructor(searchProjectData, router, projects) {
  		this.searchProjectData = searchProjectData;
      this.router = router;
      this.projects = projects;
  	}

  	activate(params, router, navigationInstruction) {

  		this.router = navigationInstruction.router;
  		return this.searchProjectData.searchByName(this.searchText).then( projects => {
  			this.projects = projects;
        //console.log(this.searchText);
        console.log(this.projects);
  		});
  	}

  	executeSearch() {
      console.log(this.searchText);
      alert(this.searchText);
  		this.router.navigateToRoute("result");
  	}

  }
