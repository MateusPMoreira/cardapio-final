//importando axios
import axios from "axios";

//passando a url base da api
const api = axios.create({
  baseURL: "http://localhost:3333"
});
//exportando essa configuração daqui de dentro
export default api;