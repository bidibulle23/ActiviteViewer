import {ExpressionBuilder} from '../models/expression'

export class Categorie{
  constructor (libelle, expressions){
    this.libelle = libelle
    this.expressions = expressions
  }
}

export class CategorieBuilder{
  constructor (){
    this.libelle = '';
    this.expressions = [];
  }

  withLibelle(libelle) {
    this.libelle = libelle;
    return this;
  }

  withExpressions(expressions) {
    for (let e of expressions) {
      let expressionBuilder = new ExpressionBuilder();
      this.expressions.push(expressionBuilder.withCode(e.code_expression)
                                             .withLibelle(e.libelle_expression)
                                             .withCodeDv(e.code_expression_dv)
                                             .withLibelleDv(e.libelle_expression_dv)
                                             .withCodeType(e.code_type_donnee)
                                             .withLibelleType(e.libelle_type_donnee)
                                             .withCodeAttribut(e.code_attribut)
                                             .withLibelleAttribut(e.libelle_attribut).build());
    }
    return this;
  }

  build(){
    return new Categorie(this.libelle, this.expressions);
  }
}
