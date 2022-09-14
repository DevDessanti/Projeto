<template>
  <div>
  <template>
    <div class="divtabela">   
        <table border="1px" class="tabela">
          <tr>
            <th>Tarefa</th>
            <th>Descrição</th>
            <th>Responsável</th>
            <th>Ações</th>
          </tr>
          <tr v-for="item in lista" :key="item.id">
            <td>{{item.tarefa}}</td>
            <td>{{item.descricao}}</td>
            <td>{{item.responsavel}}</td>
            <td><b-button class="btnAlterar" variant="warning" @click="alterar(item)">Alterar</b-button>
                <b-button class="btnDeletar" variant="danger" @click="deletar(item.id)">Deletar</b-button></td>
        </tr>
      </table>
    </div>
  </template>
    <div class="divInputs">
        <b-form @submit="onSubmit">
            <b-form-input id="inputTarefa" v-model="tarefa" placeholder="Tarefa"></b-form-input>
            <b-form-input id="inputDescricao" v-model="descricao" placeholder="Descricao"></b-form-input>
            <b-form-input class="inputResponsavel" v-model="responsavel" placeholder="Responsavel"></b-form-input>
            <b-button class="botaoInput" type="submit" variant="primary">Salvar</b-button>
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
        lista: [],
        fields:[
          {
            key: 'tarefa'
          },
          {
            key: 'descricao'
          },
          {
            key: 'responsavel'
          },
          {
            key: 'actions',
            label: 'Ações',
          },
        ],
        id         : 0,
        idCapturado: 0,
        tarefa     : "",
        descricao  : "",
        responsavel: "",
        option     : "",
      }
    },
    mounted() {
    this.tarefas();
    },
    methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        if(this.idCapturado != 0){
          await ArtigoService.alterarTarefa(this.idCapturado,this.tarefa, this.descricao, this.responsavel);

          this.tarefas();
  
          this.tarefa      = '';
          this.descricao   = '';
          this.responsavel = '';
          this.idCapturado = 0;
          
          console.log('Alterado com sucesso!');
        }else{

        if(this.tarefa == "" || this.descricao == "" || this.responsavel == ""){

          this.tarefa      = '';
          this.descricao   = '';
          this.responsavel = '';
          this.idCapturado = 0;
          this.showModalInput();

        }else{
            
          let teste = await ArtigoService.incluirTarefas({
            tarefa        : this.tarefa,
            descricao     : this.descricao,
            responsavel   : this.responsavel,
          });
  
          this.tarefa      = '';
          this.descricao   = '';
          this.responsavel = '';

          if (teste?.data != null) {
            
            this.tarefas();
            console.log('Criado com sucesso!');
          }
          }
        }
        
      } catch (error) {
        console.log(error);
          return;
        }
    },
    async tarefas(){
      try{
          let response = await ArtigoService.tarefas();

          if (response?.data != null) {
              this.lista = response.data
          }

        } catch (error) {
            console.log(error);
          }
    },
      async deletar(id){
        try{
          let response = await ArtigoService.deletarTarefas(id);
            this.id = response.data
          
          console.log("esse id e :" + id);

          if (response?.data != null) {

            this.tarefas();
            console.log(' entrou aqui deletar');
          }

        } catch (error) {
            console.log(error);
          }
    },
      async alterar(descricao){
        try{

          this.idCapturado = descricao.id
          this.tarefa = descricao.tarefa
          this.descricao = descricao.descricao
          this.responsavel = descricao.responsavel

        } catch (error) {
            console.log(error);
          }
    },
    showModalInput() {
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('Preencha todos os campos corretamente!', {
          title: 'Aviso!',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            console.log(err);
            // An error occurred
          })
    }
  }
});
  </script>

  <style>
  .divtabela{
    display: flex;
    justify-content: center;
  }
  .tabela{
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  .divInputs{
    margin-top: 50px;
  }
  .botaoInput{
    margin-top: 50px;
  }
  .btnDeletar{
    margin-left: 20px;
  }
  </style>