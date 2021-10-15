<template>
    <div class= "container">
        <b-form @submit.prevent="buscarUsuario()" v-if="show">
        <b-form-group id="input-group-1"
            label="Correo Electrónico:"
            label-for="input-1">
            <b-form-input
            id="input-1"
            v-model="form.correo"
            type="email"
            placeholder="Ingrese Correo"
            required>
            </b-form-input>
        </b-form-group>

        <!--<b-form-group 
            id="input-group-2" 
            label="Nombre:" 
            label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.nombre"
            placeholder="Ingrese nombre"
            required>
            </b-form-input>
        </b-form-group>-->   

        <b-form-group 
            id="input-group-3" 
            label="Celular:" 
            label-for="input-3">
            <b-form-input
            id="input-3"
            v-model="form.celular"
            type= "password"
            placeholder="Ingrese celular"
            required>
            </b-form-input>
        </b-form-group>
        <br>
        <b-button type="submit" variant="primary">Acceder</b-button>
        </b-form>
    </div>

    <!--<aside>
        <b-form @submit.prevent="buscarUsuario()" v-if="show">
            <label for="user">Correo Electrónico</label>
            <input type="text" placeholder="ejempo@example.com"><br>
            <label for="user">Número Celular</label>
            <input type="password" placeholder= "Ejemplo 3134445678"><br>
            <button type="button" class="btn btn-primary">Ingresar</button><br>
            
            <button type="button" @click="irRegistro" class="btn btn-secondary">Registro</button>
            <br>
            <label type= "text">*Si no se encuentra registrado dar clic en registro o crear usuario.</label> 
        </b-form>
        
    </aside>-->

</template>

<script>
export default {

    data(){
        return{
            form:{
                correo: "",
                nombre: "",
                celular: "",
            },
            show: true,
            usuarios: []
            }
        
    },
    

methods:{
    /*irRegistro(){
        this.$router.push("/registro")
    },*/

    buscarUsuario(){
        console.log("se ejecuta la función Buscar")
        this.axios.get("usuarios") .then (res => {

            console.log(this.usuarios);
            this.usuarios = res.data;

            this.usuarios.forEach((value, index) => {

                console.log(value.correo);
                console.log(value.celular);
                if(this.form.correo === value.correo){

                    console.log("Usuario si existe")
                    if(this.form.celular === value.celular){

                        console.log("Número celular correcto");

                        window.localStorage.setItem("autenticacion","ok");

                        this.$router.push({path: "Productos"});
                    }
                }

            });
            

        })


    }

    

},

beforeCreate(){

    
    var autenticacion = window.localStorage.getItem("autenticacion");
    console.log("Autenticacion esta "+autenticacion);
    if(autenticacion === "ok"){
      this.$router.push({path:"/Productos"});


    }

  },
};
</script>


<style>

aside {
    padding: auto;
    width: 3500px;
    min-height: 80vh;
    width: 30%;
    background: #E8F6EF;
    margin-left: 70px;
    margin-bottom: 10px;
    

}

aside .formulario{
    padding: 20px;
    margin-left: 23px;
    display: flex;
    flex-direction: column;
      
    
}

aside .formulario input{
    padding: 12px;
    margin-top: 12px;

}




</style>
