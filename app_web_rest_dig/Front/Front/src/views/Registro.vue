<template>
    <div class="container">
        <form @submit.prevent="agregarUsuario()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo electrónico</label>
                <input type="text" class="form-control" placeholder="ejemplo@example.com" v-model="usuario.celectronico">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" placeholder="Pepito Perez" v-model="usuario.nombre">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Número Celular</label>
                <input type="text" class="form-control" v-model="usuario.celular">
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
            <button type="submit" class="btn btn-success">Registrarse</button>
        </form>
    </div> 
</template>

<script>
export default {
    data() {
       return {
           //usuarios: [],
           usuario: {celectronico:"", nombre:"", celular:""}
       } 
    },

    created() {

    },

    methods: {
        /*listarUsuarios() {
            this.axios.get('/usuarios')
            .then(res => {
                this.usuarios = res.data;
            })
            .catch(e => {
                console.log(e.response)
            })
        }*/

        agregarUsuario() {
            this.axios.post('/nuevo-usuario', this.usuario)
            .then(res => {
                this.usuario.push(res.data);
                this.usuario.nombre = "";
                this.usuario.celectronico = "";
                this.usuario.celular = "";
                /*this.mensaje.color = "success";
                this.mensaje.texto = "Nota agregada!";
                this.showAlert();*/
            })
            .catch(e => {
                console.log("Error!");
                console.log(e.response);
            })
        }
    }
}

</script>
