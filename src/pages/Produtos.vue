<template>
  <q-page class="flex flex-start text-orange">
   
      <div class="text-h4 "  :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
        Produtos <br /> <br />
        <div class="  text-white text-h6"> Vendas pelo whatsapp: <br>(16) 98108-2833 - Suzy</div>
        <div class="text-white text-h6">Os produtos serão vendidos via links do Mercado Pago. O comprovante junto com o pedido devem ser enviados pelo whatsapp.</div> 
        <div class="text-white text-h6">Parcelamento em até 12x pelo Mercado Pago</div>
        <br /><div class="text-h4 ">Itens Avulsos
       </div>
      </div>
     
       
   

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
      <q-carousel-slide name="first">
      <q-img src="statics/icons/camiseta-frente.jpg" contain class="full-height" />
      </q-carousel-slide>
       <q-carousel-slide name="second">
      <q-img src="statics/icons/camiseta-costas.jpg" contain class="full-height" />
      </q-carousel-slide>
     
    </q-carousel>
      <q-card-section class="text-orange bg-dark">
        <div class="text-h6">Camiseta Dryfit</div>
      </q-card-section>
      <q-card-section class="text-orange bg-dark">
       Preço:<span class="text-white"> R$ 40,00 </span>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       <q-btn color="orange-10" text-color="white" rounded no-caps type="a" target="_blank" href="http://mpago.la/2gvfJk"  class="text-white"> Comprar </q-btn>
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
      <q-carousel-slide name="second" img-src="statics/icons/doll-costas.jpg" />
    </q-carousel>

      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Samba-canção ou Doll</div>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       Preço:<span class="text-white"> R$ 40,00 </span>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       <q-btn color="orange-10" text-color="white" rounded no-caps type="a" target="_blank" href="http://mpago.la/2gvfJk" class="text-white"> Comprar </q-btn>
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
      <q-carousel-slide name="first">
      <q-img src="statics/icons/regata-frente.jpg" contain class="full-height" />
      </q-carousel-slide>
      <q-carousel-slide name="second">
      <q-img src="statics/icons/regata-costas.jpg" contain class="full-height" />
      </q-carousel-slide>
    </q-carousel>
     <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Abadá ou Colete</div>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       Preço:<span class="text-white"> R$ 30,00 </span>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       <q-btn color="orange-10" text-color="white" rounded no-caps type="a" target="_blank" href="http://mpago.la/2uTvGS" class="text-white"> Comprar </q-btn>
      </q-card-section>
    </q-card>
 
 </div>
  

  <div class=" row items-start full-width" :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
       <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/caneca.jpg" height="300px"> 
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Canecas 850 ml</div>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       Preço:<span class="text-white"> R$ 20,00 </span>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       <q-btn color="orange-10" text-color="white" rounded no-caps type="a" target="_blank" href="http://mpago.la/13kTrq" class="text-white"> Comprar </q-btn>
      </q-card-section>
    </q-card>

    <q-card class="my-card col-sm-12 col-md " style="margin: 10px">
      <img src="statics/icons/tirante.jpg" height="300px"> 

      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Tirante</div>
        
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       Preço:<span class="text-white"> R$ 10,00 </span>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       <q-btn color="orange-10" text-color="white" rounded no-caps type="a" target="_blank" href="http://mpago.la/364QDs" class="text-white"> Comprar </q-btn>
      </q-card-section>
    </q-card>

    
    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/chaveiros.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Chaveiros Bottons</div>
      
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       Preço:<span class="text-white"> R$ 6,00 </span>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       <q-btn color="orange-10" text-color="white" rounded no-caps type="a" target="_blank" href="http://mpago.la/2CcT87" class="text-white"> Comprar </q-btn>
      </q-card-section>
    </q-card>
 
  </div>
   <div class="text-h4 "  :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
        Kits <br /> 
   </div>
    <div class=" row items-start full-width" :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
    <q-card class="my-card col-sm-12 col-md-4 " style="margin: 10px">
      <img src="statics/icons/kit-basico.png" height="300px"> 

      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Kit Básico</div>
        
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       Preço:<span class="text-white"> R$ 70,00 </span>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       <q-btn color="orange-10" text-color="white" rounded no-caps type="a" target="_blank" href="http://mpago.la/1K1M95" class="text-white"> Comprar </q-btn>
      </q-card-section>
      <q-card-section class="text-orange bg-dark">
       Itens:
       <q-list class="text-white">
         <q-item>- Camiseta Dryfit</q-item>
         <q-item>- Caneca 850 ml</q-item>
         <q-item>- Tirante</q-item>
         <q-item>- Chaveiro</q-item>
          <q-item></q-item>
          <q-item></q-item>
       </q-list>
      </q-card-section>
    </q-card>

     <q-card class="my-card col-sm-12 offset-md-2 col-md-4" style="margin: 10px" >
      <img src="statics/icons/kit-completo.png" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6"> Kit completo</div>
      
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       Preço:<span class="text-white"> R$ 140,00 </span>
      </q-card-section>
       <q-card-section class="text-orange bg-dark">
       <q-btn color="orange-10" text-color="white" rounded no-caps type="a" target="_blank" href="http://mpago.la/4bWey4" class="text-white"> Comprar </q-btn>
      </q-card-section>
      <q-card-section class="text-orange bg-dark">
       Itens:
       <q-list class="text-white">
         <q-item>- Camiseta Dryfit</q-item>
          <q-item>- Abadá ou Colete</q-item>
           <q-item>- Samba ou Doll</q-item>
         <q-item>- Caneca 850 ml</q-item>
         <q-item>- Tirante</q-item>
         <q-item>- Chaveiro</q-item>
       </q-list>
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
    camiseta: 'first',
    platform:''
    }
  },
  mounted(){
    this.platform = this.$q.localStorage.getItem('plataforma')
  }
}
</script>
