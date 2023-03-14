import form from "./form.js";
export default{
    name: document.querySelector("#myTabla"),
    frag: document.createDocumentFragment(),
    
    Api: async function(){
        let peticion = await fetch("./config.json");
        let json = await peticion.json();
        this.data = json;
    },
    data:[],
    Traditional(p1){
        this.data.Taditional.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    PointRange(p1){
        this.data["14-Point-Range"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    Letter(p1){
        this.data.Letter.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    SBGRating(p1){
        this.data["SBG-Rating"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    ProficiencyLevelWithStandard(p1){
        this.data["Proficiency-Level-With-Standard"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    
    },
    validarNota(){
        let dato = form.data1[0]
        this.data.Taditional.forEach((val,id)=>{
            if(dato.nota >= val[0] && dato.nota <= val[1]){
                this.Traditional(id);
                this.PointRange(id);
                this.Letter(id);
                this.SBGRating(id);
                this.ProficiencyLevelWithStandard(id);
                this.createList(id);
            }
        })
    },
    createList(val){
        this.frag = document.createDocumentFragment();
            let tr = document.createElement("TR")
            let tdTrad = document.createElement("TD")
            tdTrad.insertAdjacentText("beforeend",this.data.Taditional[val])
            let tdPR = document.createElement("TD")
            tdPR.insertAdjacentText("beforeend",this.data["14-Point-Range"][val])
            let tdLet = document.createElement("TD")
            tdLet.insertAdjacentText("beforeend",this.data.Letter[val])
            let tdSBG = document.createElement("TD")
            tdSBG.insertAdjacentText("beforeend",this.data["SBG-Rating"][val])
            let tdPL = document.createElement("TD")
            tdPL.insertAdjacentText("beforeend",this.data["Proficiency-Level-With-Standard"][val])
            tr.append(tdTrad,tdPR,tdLet,tdSBG,tdPL)
            this.frag.append(tr);
            this.name.append(this.frag);
        }}