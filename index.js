const $menu =document.querySelector("#menu")
let contadorDeIteracionesDelMenu=0;
const $cruz=document.querySelector("#cruz")
const $sideBar = document.querySelector("#side-bar")


$menu.addEventListener("click",()=>{
    console.log("Hola")
    if(contadorDeIteracionesDelMenu===0){
      $menu.style.display="none"
      $cruz.style.marginLeft=`2rem`
      $cruz.style.display="block"
      document.querySelector(".bar").style.justifyContent="flex-start"
      $sideBar.style.width= `250px`  
      contadorDeIteracionesDelMenu++
      document.querySelectorAll(".oculto").forEach((text)=>{
        text.style.display="block";
      })  

      return;
    }
})
$cruz.addEventListener("click",()=>{
    if(contadorDeIteracionesDelMenu===1){
        $menu.style.marginLeft=`none`
        $menu.style.display="block"
        $cruz.style.display="none"
        document.querySelector(".bar").style.justifyContent="center"
        $sideBar.style.width= `100px` 
        document.querySelectorAll(".oculto").forEach((text)=>{
            text.style.display="none";
          })  
        contadorDeIteracionesDelMenu--
        return;
    }
})