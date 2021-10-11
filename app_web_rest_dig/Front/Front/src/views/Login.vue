<template>
    <aside>
        <form action="#" class="formulario">
            <label for="user">Correo Electrónico</label>
            <input type="text" placeholder="ejempo@example.com"><br>
            <label for="user">Número Celular</label>
            <input type="password" placeholder="Número Celular"><br>
            <button type="button" class="btn btn-primary">Ingresar</button><br>
            <!--<input type="button" value="Ingresar"><br>-->
            <!--<a href="#">Acceso</a>-->
            <button type="button" @click="irRegistro" class="btn btn-secondary">Registro</button>
            <br>
            <label type= "text">*Si no se encuentra registrado dar clic en registro o crear usuario.</label> 
        </form>
        
    </aside>
      
</template>

<script>
export default {
methods:{
    irRegistro(){
        this.$router.push("/registro")
    }

}
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
