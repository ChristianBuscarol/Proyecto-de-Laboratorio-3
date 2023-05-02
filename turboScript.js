let btnRecibirUsuario=document.getElementById("btnRecibirUsuario"); 
btnRecibirUsuario.addEventListener("click", registro);

function registro()
{
  var txtIngresarUsuario=document.getElementById("txtIngresarUsuario");
  if(txtIngresarUsuario.value==="")
  {
    alert("Ingresa un nombre");
  }
  else
  {
    
    alert("Bienvenido "+txtIngresarUsuario.value);
    
  }
  return txtIngresarUsuario

}
let btnMeGusta=document.getElementById("btnMeGusta");
btnMeGusta.addEventListener("click", MeGustas);
let MeGusta = false;

function MeGustas() 
{
  const likeButton = document.getElementById("btnMeGusta");

  if(txtIngresarUsuario.value==="")
  {
    alert("Debes registrarte");
  }
  else
  {
    if (MeGusta) {
      btnMeGusta.innerHTML = "Me gusta";
      MeGusta = false;
      CantMeGusta.innerHTML--;
    } else {
      btnMeGusta.innerHTML = "Ya te gusta";
      MeGusta = true;
      CantMeGusta.innerHTML++;
    }
  }
}

let btnSeguirPersona=document.getElementById("btnSeguirPersona");
btnSeguirPersona.addEventListener("click", seguir);
let VSeguir = false;

function seguir()
{
  if(txtIngresarUsuario.value==="")
  {
    alert("Debes registrarte");
  }
  else
  {
    if (VSeguir) {
      btnSeguirPersona.innerHTML = "Seguir";
      VSeguir = false;
    } else {
      btnSeguirPersona.innerHTML = "Dejar de seguir";
      VSeguir = true;
    }
  }
  
}

let btnRecibirComentario=document.getElementById("btnRecibirComentario");
btnRecibirComentario.addEventListener("click", comentar);

function comentar()
{
  if(txtIngresarUsuario.value==="")
  {
    alert("Debes registrarte");
  }
  else
  {
    var txtIngresarComentario=document.getElementById("txtIngresarComentario");
    comentarios.innerHTML = txtIngresarComentario.value;
    N_Cmt.innerHTML = txtIngresarUsuario.value;
  }
}
let btnEliminar=document.getElementById("btnEliminar");
btnEliminar.addEventListener("click",eliminarcomt);

function eliminarcomt()
{
  var txtIngresarComentario=document.getElementById("txtIngresarComentario");
  comentarios.innerHTML = "";
  N_Cmt.innerHTML = "";
}