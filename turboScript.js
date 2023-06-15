const app = Vue.createApp({
  data() {
    return {
      ValidarIngreso:false,
      BtnSeguirText: "Seguir",
      ControlSeguir: true,
      CantMeGusta: 200,
      ControlMeGusta: true,
      BtnMeGustaText: "Me gusta",
      Registro:"",
      Usuario:"",
      Mensaje:"",
      NombreComentario:"",
      comentarios:[],
      txtComentario: { nombre: "", contenido: "" }
    }
  },
  methods:{
    BtnIngreso(){
      if(this.Registro == "" && !this.ValidarIngreso){
        this.Mensaje="Debes poner un nombre"
      }
      else if(this.Registro == "" && this.ValidarIngreso){
        this.Mensaje="Ya estas registrado"
      }
      else{
        this.ValidarIngreso=true
        this.Usuario=this.Registro
        this.Registro=""
        this.Mensaje="Bienvenido " + this.Usuario
      }
    },
    BtnSeguir() {

      if(this.ControlSeguir){
        this.BtnSeguirText = "Dejar de seguir"
        this.ControlSeguir = false
      }
      else{
        this.ControlSeguir = true
        this.BtnSeguirText="Seguir"
      }
    },
    BtnMeGusta() {
  
      if(this.ControlMeGusta){
        this.CantMeGusta = this.CantMeGusta + 1;
        this.ControlMeGusta = false
        this.BtnMeGustaText = "No me gusta"
      }
      else{
        this.CantMeGusta = this.CantMeGusta - 1;
        this.ControlMeGusta = true
        this.BtnMeGustaText="Me gusta"
      }
      
    },
    Comentar(){
      this.txtComentario.nombre = this.Usuario;
      if (this.txtComentario.contenido.trim() !== "") {
        this.comentarios.push({ ...this.txtComentario })
        this.txtComentario.contenido = ""
      }
    },
    Eliminar(index){
      this.comentarios.splice(index, 1)
    }
  },
})

const appMontada =app.mount('#app')