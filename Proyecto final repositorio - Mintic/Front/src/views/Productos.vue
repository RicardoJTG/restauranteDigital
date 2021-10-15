<template>         
      <div>
        <nav class="nav col-md-11 justify-content-end">
        <b-button  @click="cerrarSesion()" variant="danger">Cerrar Sesión</b-button>  
        </nav>
        <div class="container">
          
            <h1 id="titulo1">MENÚ</h1>
              <center>
              <div class="row">
                <div class="col-5">
                  <h2>Desayuno</h2>
                  <img src="../assets/img/desayuno.jpg" class="img-thumbnail" alt="Burguer">
                  <center><button type="button" class="btn btn-primary btn-sm posi">Agregar</button></center>
                </div>
                <div class="col-5">
                  <h2>Hamburguesa</h2>
                  <img src="../assets/img/comida1.jpg" class="img-thumbnail" alt="Burguer">
                  <center><button type="button" class="btn btn-primary btn-sm posi">Agregar</button></center>
                  <br>
                  <br>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <h2>Pastas</h2>
                  <img src="../assets/img/pastas.jpg" class="img-thumbnail" alt="Burguer">
                  <center><button type="button" class="btn btn-primary btn-sm posi">Agregar</button></center>
                </div>
                <div class="col-5">
                  <h2>Arepa</h2>
                  <img src="../assets/img/arepa.jpg" class="img-thumbnail" alt="Burguer">
                  <center><button type="button" class="btn btn-primary btn-sm posi">Agregar</button></center>
                  <br>
                  <br>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <h2>Pescado</h2>
                  <img src="../assets/img/pescado.jpeg" class="img-thumbnail" alt="Burguer">
                  <center><button type="button" class="btn btn-primary btn-sm posi">Agregar</button></center>
                </div>
                <div class="col-5">
                  <h2>Enchiladas</h2>
                  <img src="../assets/img/enchiladas.jpg" class="img-thumbnail" alt="Burguer">
                  <center><button type="button" class="btn btn-primary btn-sm posi">Agregar</button></center>
                </div>
              </div>
              </center>
               
        </div>
      </div>
      
    
</template>

<script>
export default {
  name: "Productos",
  beforeCreate(){

    
    var autenticacion = window.localStorage.getItem("autenticacion");
    console.log("Autenticacion esta "+autenticacion);
    if(autenticacion !== "ok"){
      this.$router.push({path: "/login"});


    }

  },
  

  methods:{

    cerrarSesion(){

      window.localStorage.removeItem("autenticacion");
      this.$router.push({path: "/login"});
    }

  }

}
</script>
<style>


#titulo1{
  text-align: center;
  background: white;
  

}



</style>