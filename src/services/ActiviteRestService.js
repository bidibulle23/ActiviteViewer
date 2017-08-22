import Vue from 'vue'
import VueResource from 'vue-resource'
import {ActiviteBuilder} from '../models/activite'
Vue.use(VueResource)

export class ActiviteRestService{
  findAllActivities (callback) {
    return Vue.http.get('http://localhost:3000/activities').then(response => {
      // get body data
      let activities = [];
      for (let a of response.body) {
        let activityBuilder = new ActiviteBuilder();
        activities.push(activityBuilder.withCode(a.code_activite).withLibelle(a.libelle_activite).withCategories(a.categories).build());
      }
      callback(activities);
    }, response => {
      console.log("Erreur ");
    })
  }
}
