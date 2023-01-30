let resultado = document.getElementsByClassName("resultado")
let botaoEnviar = document.getElementById('btn1')
let teclanum = document.querySelector('.box')





botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('resultado').innerHTML = "";

})
function insert(num){
   let decimal = document.getElementById('resultado').innerHTML += num;
  
   if(decimal(",")){
    //document.querySelector(".box-20").disabled = true
    alert('ok')
   }
}

 function del(){
    let  del = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = del.substring(0, del.length - 1)
 }

 function calc(){
    let resul = document.getElementById('resultado').innerHTML;
    if(resul){
        document.getElementById('resultado').innerHTML = eval(resul)
    }else{
        document.getElementById('resultado').innerHTML = "ERRO!!"
    }
 }

 const virgula = () => {
    if(newnum){
        svalor ='0,';
        newnum = false;
    }else if(svalorindexof(',')==-1) 
        svalor+= ','
    };

