<template>
  <q-page class="flex flex-start ">
   
   <div>
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
        <div class="text-subtitle2"> Quem Somos, Membros </div>
      </q-card-section>
    </q-card>
     
  
     <q-card  @click="Curso" class="my-card col-sm-12 col-md bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/curso.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">O Curso</div>
          <div class="text-subtitle2">Grade, projeto pedagógico, calendário e mais</div>
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
     
      <img src="statics/icons/ifsp-sanca.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">IFSP - São Carlos <q-badge align="top" color="red">Em Construção</q-badge></div>
        <div class="text-subtitle2">O melhor dos IFSP's <i class="fas fa-heart"></i> <i class="fas fa-heart"></i></div>
      </q-card-section>
    </q-card>
      <q-card class="my-card col-sm-12 col-md  bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/bixos.jpg" height="300px"> 
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Bixos <q-badge align="top" color="red">Em Construção</q-badge> </div>
      </q-card-section>
    </q-card>
   
  
    <q-card class="my-card col-sm-12 col-md bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/events.jpg" height="300px">
      
      <q-card-section  class="text-orange bg-dark">
        
        <div class="text-h6">Eventos <q-badge align="top" color="red">Em Construção</q-badge></div>
      </q-card-section>
    </q-card>

  
  </div>

  <div class=" row items-start " :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
        <q-card class="my-card col-sm-12 col-md  bg-dark" style="margin: 10px; height:400px">
      <img src="statics/icons/sanca.jpg" height="300px"> 
      
      <q-card-section  class="text-orange bg-dark">
        
        <div class="text-h6">São Carlos <q-badge align="top" color="red">Em Construção</q-badge></div>
      </q-card-section>
    </q-card>

    <q-card class="my-card col-sm-12 col-md bg-dark" style="margin: 10px; height:400px">
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

     this.$q.notify({
        type: 'my-notif',
        icon: 'contactless',
        message: `Siga-nos nas redes sociais e ajude-nos a ter mais visibilidade`,
        color: 'amber-10',
        position:this.platform == 'android'?'bottom':'top-right',
        duration:1500
      })
  },
}
</script>

