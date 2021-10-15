<template>
    <div class="container">
        <h1>Cuentas</h1>

        <form @submit.prevent="editarCuenta(cuentaEditar)" v-if="editar">
        <h3>Editar cuenta</h3>

        <input type="text" class="form-control my-2" placeholder="Correo" v-model="cuentaEditar.correo">
        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="cuentaEditar.nombre">
        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="cuentaEditar.celular">
        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
        <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>

    </form>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Correo lectrónico</th>
                <th scope="col">Nombre</th>
                <th scope="col">Número Celular</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cuentas" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.correo}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.celular}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarCuenta(item._id)">Eliminar</b-button>
                    <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
                </td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
export default {

    data (){
        return {

            cuentas: [],

            cuenta:{correo:"",nombre:"",celular:""},
            editar:false,
            cuentaEditar:{}

        }
    },

    created(){

        this.listarCuentas();

    },
    beforeCreate(){

    
    var autenticacion = window.localStorage.getItem("autenticacion");
    console.log("Autenticacion esta "+autenticacion);
    if(autenticacion !== "ok"){
      this.$router.push({path: "/login"});


    }

  },

    methods: {

        listarCuentas(){

            this.axios.get("/usuarios")
            .then(res=>{

                this.cuentas=res.data;


            })
            .catch(e=>{

                console.log(e.response)

            })

        },
        eliminarCuenta(id){

            this.axios.delete(`/usuarios/${id}`)
            .then(res=>{

                const index = this.usuarios.findIndex(item=> item._id===res.data._id);
                this.usuarios.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Eliminado";
                this.showAlert();


            })
            .catch(e=>{

                  console.log(e.response);

            })
        },

        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/usuarios/${id}`)
            .then(res=>{

                this.cuentaEditar=res.data;

            })
            .catch(e=>{

                 console.log(e.response);


            })


        },

        editarCuenta(item){
            
            this.axios.put(`/usuarios/${item._id}`, item)
            .then(res=>{
                const index= this.cuentas.findIndex(n=> n._id===res.data._id);
                this.cuentas[index].correo=res.data.correo;
                this.cuentas[index].nombre=res.data.nombre;
                this.cuentas[index].celular=res.data.celular;
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Editado";
                this.showAlert();
                this.editar=false;


            })
            .catch(e=>{

                console.log(e.response);

            })



        },

    }

};
</script>

<style>






</style>