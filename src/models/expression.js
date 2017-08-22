export class Expression{
  constructor (code, libelle, code_dv, libelle_dv, code_type_donnee, libelle_type_donnee, code_attribut, libelle_attribut){
    this.code = code
    this.libelle = libelle
    this.code_dv = code_dv
    this.libelle_dv = libelle_dv
    this.code_type_donnee = code_type_donnee
    this.libelle_type_donnee = libelle_type_donnee
    this.code_attribut = code_attribut
    this.libelle_attribut = libelle_attribut
  }
}

export class ExpressionBuilder{
  constructor (){
    this.code = ''
    this.libelle = ''
    this.code_dv = ''
    this.libelle_dv = ''
    this.code_type_donnee = ''
    this.libelle_type_donnee = ''
    this.code_attribut = ''
    this.libelle_attribut = ''
  }

  withCode(code) {
    this.code = code;
    return this;
  }

  withLibelle(libelle) {
    this.libelle = libelle;
    return this;
  }

  withCodeDv(codeDv) {
    this.code_dv = codeDv;
    return this;
  }

  withLibelleDv(libelleDv) {
    this.libelle_dv = libelleDv;
    return this;
  }

  withCodeType(codeType) {
    this.code_type_donnee = codeType;
    return this;
  }

  withLibelleType(libelleType) {
    this.libelle_type_donnee = libelleType;
    return this;
  }

  withCodeAttribut(codeAttribut) {
    this.code_attribut = codeAttribut;
    return this;
  }

  withLibelleAttribut(libelleAttribut) {
    this.libelle_attribut = libelleAttribut;
    return this;
  }

  build(){
    return new Expression(this.code, this.libelle, this.code_dv, this.libelle_dv, this.code_type_donnee, this.libelle_type_donnee, this.code_attribut, this.libelle_attribut);
  }
}

