<template>
  <div>
    <h1>{{ categorie.libelle }}</h1>
    <el-table
      :data="categorie.expressions"
      stripe
      style="width: 100%">
      <el-table-column
        prop="code"
        label="Code"
        min-width="10">
      </el-table-column>
      <el-table-column
        prop="libelle"
        label="Libellé"
        min-width="15">
      </el-table-column>
      <el-table-column
        prop="code_dv"
        label="Code DV"
        min-width="10">
      </el-table-column>
      <el-table-column
        prop="libelle_dv"
        label="Libellé DV"
        min-width="15">
      </el-table-column>
      <el-table-column
        prop="code_type_donnee"
        label="Code Type"
        min-width="10">
      </el-table-column>
      <el-table-column
        prop="libelle_type_donnee"
        label="Libellé Type"
        min-width="15">
      </el-table-column>
      <el-table-column
        prop="code_attribut"
        label="Code Attribut"
        min-width="10">
      </el-table-column>
      <el-table-column
        prop="libelle_attribut"
        label="Libellé Attribut"
        min-width="15">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {ActiviteRestService} from '../services/ActiviteRestService'
export default {
  name: 'expression',
  props: ['categorie'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align : center;
  font-size : 1.5em
}
</style>
