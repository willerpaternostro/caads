<template>
  <q-page class="flex flex-start text-orange">
   <div class="row">
      <div class="text-h4 row"  :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
        Produtos <br>  
        </div>
       
    </div><br>

  <div class="row items-start full-width"  :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
  
    <q-card :class="platform == 'windows' || platform == 'linux'?'my-card col-sm-12 col-md':'my-card col-sm-12 col-md full-width' " style="margin: 10px">
      <q-carousel
      control-color="orange"
      arrows
      infinite
      animated
      v-model="camiseta"
      height="300px"
      >
      <q-carousel-slide name="first" img-src="statics/icons/camiseta-frente.jpg" />
     
      <q-carousel-slide name="second" img-src="statics/icons/camiseta-costas.jpg" />
     
    </q-carousel>
      <q-card-section class="text-orange bg-dark">
        <div class="text-h6">Camiseta Dryfit</div>
      
      </q-card-section>
    </q-card>

    <q-card :class="platform == 'windows' || platform == 'linux'?'my-card col-sm-12 col-md':'my-card col-sm-12 col-md full-width' " style="margin: 10px">
      <q-carousel
      control-color="orange"
      arrows
      infinite
      animated
      v-model="samba"
      height="300px"
    >
      <q-carousel-slide name="first" img-src="statics/icons/samba-frente.jpg" />
      <q-carousel-slide name="second" img-src="statics/icons/samba-costas.jpg" />
    </q-carousel>

      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Samba-canção</div>
      </q-card-section>
    </q-card>

    
     <q-card :class="platform == 'windows' || platform == 'linux'?'my-card col-sm-12 col-md':'my-card col-sm-12 col-md full-width' " style="margin: 10px">
    <q-carousel
    control-color="orange"
      arrows
      infinite
      animated
      v-model="regata"
      height="300px"
    >
      <q-carousel-slide name="first" img-src="statics/icons/regata-frente.jpg" />
      <q-carousel-slide name="second" img-src="statics/icons/regata-costas.jpg" />
    </q-carousel>
     <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Abadá</div>
      </q-card-section>
    </q-card>
     <q-card :class="platform == 'windows' || platform == 'linux'?'my-card col-sm-12 col-md':'my-card col-sm-12 col-md full-width' " style="margin: 10px">
      <q-carousel
      control-color="orange"
      infinite
      arrows
      animated
      v-model="doll"
      height="300px"
    >
      <q-carousel-slide name="first" img-src="statics/icons/doll-frente.jpg" />
      <q-carousel-slide name="second" img-src="statics/icons/doll-costas.jpg" />
    </q-carousel>
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Doll</div>
      </q-card-section>
    </q-card>
 </div>
  

  <div class=" row items-start full-width" :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
    <q-card class="my-card col-sm-12 col-md " style="margin: 10px">
      <img src="statics/icons/tirante.jpg" height="300px"> 

      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Tirante</div>
        
      </q-card-section>
    </q-card>

     <q-card class="my-card col-sm-12 col-md" style="margin: 10px" >
      <img src="statics/icons/sacochila.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6"> Sacochila</div>
      
      </q-card-section>
    </q-card>
   
    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/chaveiros.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Chaveiros</div>
      
      </q-card-section>
    </q-card>
    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/caneca.jpg" height="300px"> 
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Canecas</div>
      </q-card-section>
    </q-card>
  </div>
  
  </q-page>
</template>

<script>
export default {
  data () {
    return {
    slide: 'first',
    regata: 'first',
    samba: 'first',
    doll: 'first',
    camiseta: 'first',
    platform:''
    }
  },
  mounted(){
    this.platform = this.$q.localStorage.getItem('plataforma')
  }
}
</script>
