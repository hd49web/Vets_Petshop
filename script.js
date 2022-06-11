
const menuLista = document.getElementById('menu-lista')
menuLista.style.maxHeight = "0px"

function showMenu(){
 if(menuLista.style.maxHeight == "0px"){
 	menuLista.style.maxHeight = "120px"
 }else{
 	menuLista.style.maxHeight = "0px"
 }
}


const andando = document.querySelector('.andando');
const deolho = document.querySelector('.deolho');

const loop = setInterval(() => {
const andandoPosition = andando.offsetLeft;
const deolhoPosition = deolho.offsetLeft;
if(andandoPosition == 400 ){
    
clearInterval(loop);

    andando.src ="gif/caobravo.gif";
    andando.style.width='150px'
    andando.style.left = '400px'
    andando.style.animation='none';
    
    deolho.src='gif/gatoolho.gif';
    deolho.style.width='100px'
    deolho.style.left = '10px'
    deolho.style.animation="none";
}
}, 10) ;

setTimeout(function(){
    if(andando <="caobravo.gif"){
    andando.src= 'gif/correndo.gif';
    andando.style.width='180px';
    deolho.src ='gif/assustado.gif';
    deolho.style.width ='150px';
    }
},18000);

setTimeout(function(){
    if(andando <="correndo.gif"){
    andando.src= 'gif/correndo.gif';
    deolho.src ='gif/gatobravo.gif';
    
    }
},20000);
setTimeout(function(){
    if(andando <="correndo.gif"){
    andando.src= 'gif/late.gif';
    andando.style.width='130px';
    deolho.src ='imagens/logo2.jpg';
    deolho.style.width='195px';
    }
},22000);




