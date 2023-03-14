const shaco = document.getElementById('champ_1');
const yasuo = document.querySelector('#champ_2');
const jinx = document.querySelector('#champ_3');
const warwich = document.querySelector('#champ_4');
const ekko = document.querySelector('#champ_5');
const singed = document.querySelector('#champ_d');

const boasVindas = document.querySelector('#boas_vindas');

const navBar = document.querySelector('#navbar');
const botaoHome = document.querySelector('#buttunhome');
const botaoContact = document.querySelector('#contact');
const botaoconhece = document.querySelector('#conhecer');
const iconajuda = document.querySelector('#icon_ajuda');


const shacolor = document.querySelector('#shacolor');
const yasuolor = document.querySelector('#yasuolor');
const jinxlor = document.querySelector('#jinxlor');
const wwlor = document.querySelector('#wwlor');
const ekkolor = document.querySelector('#ekkolor');
const singedlor = document.querySelector('#singedlor');



const container = document.querySelector('#container');

const contate = document.querySelector("#contate");
const About = document.querySelector('#about');

//var boleano

var botaoTrue = true;



function shacoSecion (event)  {

  console.log("shaco");


container.style.display="none";

singed.style.display="none"

boasVindas.style.display = "none"; 

shacolor.style.display="flex"

avisado.style.opacity="0";

}

function yasuoSecion (event)  {

  console.log("yasuo");

container.style.display="none";

singed.style.display="none"

boasVindas.style.display = "none"; 

yasuolor.style.display="flex"

avisado.style.opacity="0";

}

function jinxSecion (event)  {

  console.log("!");

container.style.display="none";

singed.style.display="none"

boasVindas.style.display = "none"; 

jinxlor.style.display="flex"

avisado.style.opacity="0";

}

function wwSecion (event)  {

  console.log("!");

container.style.display="none";

singed.style.display="none"

boasVindas.style.display = "none"; 

wwlor.style.display="flex"

avisado.style.opacity="0";

}

function ekkoSecion (event)  {

  console.log("!");

container.style.display="none";

singed.style.display="none"

boasVindas.style.display = "none"; 

ekkolor.style.display="flex"

avisado.style.opacity="0";

}

function singedSecion (event)  {

  console.log("!");

container.style.display="none";

singed.style.display="none"

boasVindas.style.display = "none"; 

singedlor.style.display="flex"

avisado.style.opacity="0";

}





function botaoHOME (event)  {

  console.log("home");

  container.style.display="flex";
  singed.style.display=""

  boasVindas.style.display = "block"; 

  shacolor.style.display="none"
  yasuolor.style.display="none"
  jinxlor.style.display="none"
  wwlor.style.display="none"
  ekkolor.style.display="none"
  singedlor.style.display="none"

  contate.style.display="none"; 
  About.style.display="none"; 

  botaoTrue=true
  avisado.style.opacity="0";
}

function botaoContato(event){
  avisado.style.opacity="0";
  contate.style.display="block"; 

  container.style.display="none";
  singed.style.display="none"
  boasVindas.style.display = "none"; 
  About.style.display="none"; 

  shacolor.style.display="none"
  yasuolor.style.display="none"
  jinxlor.style.display="none"
  wwlor.style.display="none"
  ekkolor.style.display="none"
  singedlor.style.display="none"
}

function botaoconhecer(event){

  About.style.display="block"; 

  container.style.display="none";
  singed.style.display="none"
  boasVindas.style.display = "none"; 
  contate.style.display = "none"; 

  shacolor.style.display="none"
  yasuolor.style.display="none"
  jinxlor.style.display="none"
  wwlor.style.display="none"
  ekkolor.style.display="none"
  singedlor.style.display="none"

  avisado.style.opacity="0";
}

const avisado = document.querySelector("#avisei");
var avisoboleano = true;

function botaoajude(event){
 if(avisoboleano == true){
    avisado.style.opacity="1";
    avisado.style.transition="0.5s";
    avisoboleano = false;
   } else {
    avisado.style.opacity="0";
    avisado.style.transition="0.5s";
   avisoboleano = true;
   }
  
}

const container_desc = document.querySelectorAll('.desc');
const container_descricao = document.querySelectorAll('#container_desc');
const seta_container_seta = document.querySelectorAll('.seta_container_seta');

const seta = document.querySelectorAll ('.seta_seta');



for (let i = 0; i < seta.length; i++) {
  i = i% 6;
  seta[i].addEventListener('click', desc);

  function desc (event)  {
    console.log(seta)
  
    if(botaoTrue == true){
      console.log("fechou")
  
  
      container_descricao[i].style.transform = "translateX(100px)"
      container_desc[i].style.opacity = "0"
      container_desc[i].style.display = "none"
      container_desc[i].style.transition = "1s " 
      
      seta[i].style.transform = "rotate(-135deg)"
      seta[i].style.transition = "0.3s " 
  
      seta_container_seta[i].style.transform = "translateX(100px)"
      seta_container_seta[i].style.transition = "0.5s " 
  
      return botaoTrue=false;
    } else {
  
      console.log("abriu")
  
      container_descricao[i].style.transform = "translateX(0px)"
      seta_container_seta[i].style.transform = "translateX(0px)"
      container_desc[i].style.opacity = "1"
      container_desc[i].style.transition = "1s " 
      container_desc[i].style.display = "flex"
      container_desc[i].style.transition = "1s " 
      
      seta[i].style.transform = "rotate(45deg)"
      seta[i].style.transition = "0.3s " 
      return botaoTrue=true;
      
    }
  
    
  }

}

iconajuda.addEventListener('click', botaoajude);


botaoconhece.addEventListener('click', botaoconhecer);

botaoContact.addEventListener('click', botaoContato);

botaoHome.addEventListener('click', botaoHOME);


shaco.addEventListener('click', shacoSecion);

yasuo.addEventListener('click', yasuoSecion);

jinx.addEventListener('click', jinxSecion);

warwich.addEventListener('click', wwSecion);

ekko.addEventListener('click', ekkoSecion);

singed.addEventListener('click', singedSecion);

