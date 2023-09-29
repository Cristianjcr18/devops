const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function iniciar(){
  var contra = "admin";
  var usuario = "admin";

  if(document.form.contraseña.value==contra && document.form.email.value==usuario){
    window.location.href ='principal.html';
  }else{
    alert("Usuario o contraseña incorrecto");
  }
}
