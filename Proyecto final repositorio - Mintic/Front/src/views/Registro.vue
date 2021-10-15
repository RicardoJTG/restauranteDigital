<template>
    <div class="container">

        <b-alert 
            :show="dismissCountDown" 
            dismissible 
            :variant="mensaje.color" 
            @dismissed="dismissCountDown=0" 
            @dismiss-count-down="countDownChanged" > 
            {{mensaje.texto}} 
        </b-alert>

        <form @submit.prevent="agregarCuenta()">

            <h3>Registrar cuenta</h3>

            <input type="text" class="form-control my-2" placeholder="Correo electrónico" v-model="cuenta.correo">
            <input type="text" class="form-control my-2" placeholder="Nombre" v-model="cuenta.nombre">
            <input type="text" class="form-control my-2" placeholder="Celular" v-model="cuenta.celular">
            <b-button class="btn-success my-2" type="submit">Agregar</b-button>
            <!--<div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo electrónico</label>
                <input type="text" class="form-control" placeholder="ejemplo@example.com" v-model="usuario.correo">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" placeholder="Pepito Perez" v-model="usuario.nombre">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Número Celular</label>
                <input type="text" class="form-control" placeholder= "Ejemplo 3134417598" v-model="usuario.celular">
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                <label class="form-check-label" for="flexCheckDefault">
                  Política de <a href="#">tratamiento de datos</a>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">
                  Acepta el envío de información promocional
                </label>
            </div>
            <br>
            <b-button class="btn-success" type="submit">Registrarse</b-button>-->
        </form>
    </div> 
</template>

<script>
export default {

    data() {
       return {

            cuentas: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5, 
            dismissCountDown: 0,

            cuenta: {correo:"", nombre:"", celular:""}
       } 
    },

    created() {

        this.listarCuentas();

    },

    methods: {
        listarCuentas() {
            this.axios.get(`/usuarios`)
            .then(res => {
                this.usuarios = res.data;
            })
            .catch(e => {
                console.log(e.response)
            })
        },

        agregarCuenta() {

            this.axios.post('/nuevo-usuario', this.cuenta)
            .then(res => {

                this.cuenta.push(res.data);
                this.cuenta.correo = "";
                this.cuenta.nombre = "";
                this.cuenta.celular = "";
                this.mensaje.color = "success";
                this.mensaje.texto = "Usuario Agregado!";
                this.showAlert();
            })
            .catch(e => {
                //console.log("Error!");
                console.log(e.response);
            })
        },

        

        
        countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown 
        }, 
        showAlert() { 
            this.dismissCountDown = this.dismissSecs 
        }
    },

    beforeCreate(){

    
    var autenticacion = window.localStorage.getItem("autenticacion");
    console.log("Autenticacion esta "+autenticacion);
    if(autenticacion === "ok"){
      this.$router.push({path:"/Productos"});


    }

  },
}

</script>
