//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  repoData = ["Java Spring Rest Api", "Hadoop With Storm", "Ruby on Rails","SPA with Angular 2.0",
  "Hadoop With Python","Java EE6 With JSF & Primefaces","Docker Cloud","AWS Container Service With Jenkins"];

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
get dataRepo(){
  return this.repoData;
}
}
