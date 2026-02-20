import axios from "axios";



async function api(prompt){
const response = await axios.post("http://localhost:11434/api/generate",
    {
  "model": "qwen3:8b",
  "prompt": `give me a recipe made from these ingredients: ${prompt}`,
  "stream": false
}
)
console.log(response.data)
return response.data;

}
export default api;
