function veri(){
    const velo = document.querySelector("#velo").value
    const result = document.getElementById("result")
    if(velo <= 60){
        result.innerHTML = "você não foi multado!"
    }else{
        result.innerHTML = "você foi multado!"
    }
}