import {CategorieBuilder} from '../models/categorie'

export class Activite{
  constructor (code, libelle, categories){
    this.code = code
    this.libelle = libelle
    this.categories = categories
  }
}

export class ActiviteBuilder{
  constructor (){
    this.code = 0;
    this.libelle = '';
    this.categories = [];
  }

  withCode(code) {
    this.code = code;
    return this;
  }

  withLibelle(libelle) {
    this.libelle = libelle;
    return this;
  }

  withCategories(categories) {
    for (let c of categories) {
      let categorieBuilder = new CategorieBuilder();
      this.categories.push(categorieBuilder.withLibelle(c.categorie_cviv).withExpressions(c.expressions).build());
    }
    return this;
  }

  build(){
    return new Activite(this.code, this.libelle, this.categories);
  }
}
