import { PROJETO } from "./Api";

export default {

  /**
   *  
   * @param {*} data
   */
  async incluirTarefas(data) {
    return await PROJETO.post("novaTarefa/", JSON.stringify(data));
  }


};