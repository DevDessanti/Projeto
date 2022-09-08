<template>
  <div>
  <template>
    <div>
        <b-table striped hover :items="lista">
        
           <b-button variant="danger">Deletar</b-button>
     
        </b-table>
    </div>
  </template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-input v-model="tarefa" placeholder="Tarefa"></b-form-input>
            <b-form-input v-model="descricao" placeholder="Descricao"></b-form-input>
            <b-form-input v-model="responsavel" placeholder="Responsavel"></b-form-input>
            <b-button type="submit" variant="primary">Salvar</b-button>
        </b-form>
    </div> 
</div>
</template>

  <script>

import ArtigoService from "@/services/ArtigoService";
// import InsereArtigoService from "@/services/InsereArtigoService";

export default({
    data() {
      return {
        lista:[],
        tarefa     : "",
        descricao  : "",
        responsavel: "",
        deletara : "deletar"
      }
    },
    mounted() {
    this.tarefas();
    },
    methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {

        let teste = await ArtigoService.incluirTarefas({
          tarefa        : this.tarefa,
          descricao     : this.descricao,
          responsavel   : this.responsavel
        });

        this.tarefa      = '';
        this.descricao   = '';
        this.responsavel = '';

        if (teste?.data != null) {
          // this.responseMessage = response.data.message;
         console.log('Criado com sucesso!');
        }
      } catch (error) {
        console.log(error);
          return;
        }
    },
    async tarefas(){
      try{
          let response = await ArtigoService.tarefas();
          // console.log(response);

          if (response?.data != null) {

            //   var retornoBanco = response.data;
              this.lista = response.data
          }

        } catch (error) {
            console.log(error);
          }
      },
      async deletar(id){
      try{
          let responses = await ArtigoService.deletarTarefas(id)
            
            console.log("esse id e :" + responses.data);
          
          // console.log(response);

          if (responses?.data != null) {

            //   var retornoBanco = response.data;
              this.lista = responses.data

              console.log(this.lista);
          }

        } catch (error) {
            console.log(error);
          }
      }
     
  }
})
  </script>