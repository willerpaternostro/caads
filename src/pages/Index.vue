<template>
  <q-page class="flex flex-start ">
   
   <div > 
       <div class="text-h4 text-orange" style="margin-left:50px"> Centro Acadêmico de Análise e Desenvolvimento de Sistemas </div>
      <br/>
        <div class="text-h4 text-white" style="margin-left:50px">Sejam Bem-Vindos!!</div>
        <br/>
        <div class="text-h6 text-white" style="margin-left:50px">
        Somos o Centro Acadêmico do curso de ADS, nossa função é promover atividades sociais,<br/>
        culturais e desportivas, incentivar a interação entre o corpo docente e discente,<br/>
        representar e defender os direitos dos estudantes do curso de ADS.
        </div>
   </div>
 
  <div class="row items-start" :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
    <q-card @click="Caads" class="my-card col-sm-12 col-md  bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/caads-white.png" height="300px">
      <q-card-section class="text-orange bg-dark">
        <div class="text-h6">O CAADS</div>
      
      </q-card-section>
    </q-card>
     
  
     <q-card  @click="Curso" class="my-card col-sm-12 col-md bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/curso.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">O Curso</div>
          
      </q-card-section>
    </q-card>
       <q-card @click ="irProdutos" class="my-card col-sm-12 col-md bg-dark" style="margin: 10px; height:400px" >
      <img src="statics/icons/kit-completo.jpg" height="300px">
      
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6" 
        > Produtos</div>
      </q-card-section>
    </q-card>
  
  </div>
   
  <div class=" row items-start " :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
     <q-card class="my-card col-sm-12 col-md bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/events.jpg" height="300px">
      
      <q-card-section  class="text-orange bg-dark">
        
        <div class="text-h6">Eventos <q-badge align="top" color="red">Em Construção</q-badge></div>
      </q-card-section>
    </q-card>
       <q-card @click="Patrocinadores" class="my-card col-sm-12 col-md bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/parceiros.jpg" height="300px">
     
      <q-card-section  class="text-orange bg-dark">
        
        <div class="text-h6">Patrocínios <q-badge align="top" color="red">Em Construção</q-badge></div>
      </q-card-section>
    </q-card>

      <q-card class="my-card col-sm-12 col-md bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/vagas.jpg" height="300px">

      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Há vagas! <q-badge align="top" color="red">Em Construção</q-badge></div>
      </q-card-section>
    </q-card>
   
  
   

  
  </div>

      

    
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
    platform:''
    }
  },
  methods:{
    Patrocinadores(){
      this.$router.push({name:'Patrocinadores'})
    },
    Caads(){

      this.$router.push({name:'Caads'})
    },
      Curso(){
     
      this.$router.push({name:'Grade'})
    },
    irProdutos(){
      this.$router.push({name:'Produtos'})
    }
  },
   mounted(){
    this.platform = this.$q.localStorage.getItem('plataforma')

  
  },
}
</script>

