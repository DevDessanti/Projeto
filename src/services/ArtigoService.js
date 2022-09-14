import { PROJETO } from "./Api";

export default {

  /**
   *  
   * @param {*} data
   */
  async tarefas(data) {
    return await PROJETO.get("tarefas/", JSON.stringify(data));
  },

  async incluirTarefas(data) {
    return await PROJETO.post("novaTarefa/", data);
  },

  async deletarTarefas(id) {
    return await PROJETO.delete("tarefa/"+ id);
  },

  async alterarTarefa(id, tarefa, descricao, responsavel) {
    return await PROJETO.put("atualizar/tarefa/"+ id, {
      tarefa: tarefa,
      descricao: descricao,
      responsavel: responsavel,
    });
  },

};