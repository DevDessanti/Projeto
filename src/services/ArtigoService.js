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

  async deletarTarefas(id,data) {
    return await PROJETO.get(`tarefas/${id}`, JSON.stringify(data));
  },

};