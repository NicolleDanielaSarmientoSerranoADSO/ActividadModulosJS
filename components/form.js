import tabla from "./tabla.js";
export default{
    name : document.querySelector('#myForm'),
    data1:[],
    guardaNota(){
        this.name.addEventListener("submit", (e)=>{
            this.data1.push(Object.fromEntries(new FormData(e.target)))
            this.name.reset();
            e.preventDefault();
            tabla.validarNota();
            this.data1=[]
        })
    }}