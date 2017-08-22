<template>
  <div id="activites">
    <h1>Expressions par activité 14F</h1>
    <div class="hello">
      <div id="activite">
        <form>
          <input
            placeholder="Filtrer les activités"
            v-model="filtre"
            @keyup.enter="applyFilter">
          </input>
          <el-button @click="applyFilter">Filtrer</el-button>

        </form>
        <el-table
          :data="displayedTableData"
          :row-class-name="tableRowClassName"
          stripe>
          <el-table-column
            type="expand">
            <template scope="activite">
             <div  class="activite" v-for="categorie in activite.row.categories">
                <a href="#" @click="selectCategorie(activite, categorie)">
                  {{ categorie.libelle }} >
                </a>
             </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="code"
            label="Code"
            min-width="20">
          </el-table-column>
          <el-table-column
            prop="libelle"
            label="Libellé"
            min-width="80">
          </el-table-column>
        </el-table>
      </div>
      <div v-if="selectedCategorie" id="expression">
        <expression :categorie="selectedCategorie" />
      </div>
    </div>
  </div>
</template>

<script>
import {ActiviteRestService} from '../services/ActiviteRestService'
import Expression from './Expression.vue'

export default {
  name: 'activite',
  data () {
    return {
      tableData: [],
      displayedTableData: [],
      selectedActivite: null,
      selectedCategorie: null,
      filtre : ''
    }
  },
  created : function(){
    let service = new ActiviteRestService()
    service.findAllActivities(this.updateTableData);
  },
  methods: {
    updateTableData: function (data){
      for (let row of data){
        this.displayedTableData.push(row)
        this.tableData.push(row)
      }
    },
    selectCategorie: function (activite, categorie){
      this.selectedActivite = activite.row
      this.selectedCategorie = categorie
     },
    applyFilter: function() {
      this.displayedTableData = this.tableData.filter((activite) => {
        return activite.code.startsWith(this.filtre) || activite.libelle.includes(this.filtre);
      });
    },
    tableRowClassName(row, index) {
        if (this.selectedActivite && this.selectedActivite.code == row.code){
          return "selected"
        }
     }
  },
  components: {
    'expression': Expression
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#activites {
display: flex;
flex-direction: column;
height: 100%
}

#activites > h1{
  text-align: center;
  flex-basis: 10vh;
  margin: 0;
  margin-top: 2vh;
}

#activites > .hello{
  display: flex;
  flex-direction: row;
  flex-basis: 88vh;
  overflow-y: scroll
}

.hello > #activite{
  flex-basis: 30%;
   height : 80vh
}

form {
  display: flex;
  flex-direction: row;
  align-content: flex-end;
}

form > button[type='button'] {
  padding: 0 10px;
  margin: 5px 0px
}

input {
  font-size: 1em;
  width: calc(100% - 15px);
  margin: 5px 5px 5px 0;
  padding: 5px;
}

.selected {
  font-weight : bold;
  color : red;
}

.activite{
  margin : 5px 0;
}

.activite a{
 text-decoration: none
}

#expression {
  position: absolute;
  top:10vh;
  right:20px;
  left: 30%
}
</style>
