<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">
    <q-header elevated class="bg-dark" reveal>
      <q-toolbar>
        
        <q-btn
          class="desktop-hide"
          flat
          dense
          round
          @click="drawer = !drawer"
          aria-label="Menu"
        > 
         
           <q-avatar icon="menu" /> 
          
        </q-btn>
        <q-toolbar-title class="desktop-hide" />
         <q-toolbar-title class="desktop-hide"  />
      <q-toolbar-title  class="desktop-hide" >
         <q-avatar size="100px">
            <img src="statics/icons/caads-transparente.png">
          </q-avatar> 
      </q-toolbar-title>
       <q-toolbar-title class="row mobile-hide ">
         <q-btn class="col-1" flat style="color: grey;" label="Home"  icon="home" to="/" />
        <q-btn class="col-1" flat style="color: grey;" label="CAADS" :to="{ name: 'Caads' }" />
        <q-btn-dropdown
      push
      flat
     text-color="grey"
    label="Curso"
     
    >
      <q-list>
        
        <q-item clickable v-close-popup :to="{name:'Grade'}">
          <q-item-section>
            <q-item-label><q-btn flat class="full-width" no-caps>Grade Curricular/ O Profissional </q-btn> </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup >
            
          <q-item-section>
            <q-item-label> <q-btn flat class="full-width" target="_blank" href="https://drive.ifsp.edu.br/s/W9KfbmjhGLXvxJa" type="a" no-caps label="Horários de aulas" /></q-item-label>
          </q-item-section>
        </q-item>
          <q-item clickable v-close-popup >
            
          <q-item-section>
            <q-item-label> <q-btn flat class="full-width" target="_blank" href="https://drive.ifsp.edu.br/s/OgytR7nzZ7EPOja" type="a" no-caps label="Projeto Pedagógico" /></q-item-label>
          </q-item-section>
        </q-item>

          <q-item clickable v-close-popup  ref>
          <q-item-section>
            <q-item-label> <q-btn flat class="full-width" target="_blank" href="https://drive.ifsp.edu.br/s/OyeAnex6RtmROky" type="a" no-caps label="Calendário" /></q-item-label>
          </q-item-section>
        </q-item>

         <q-item clickable v-close-popup  >
          <q-item-section>
            <q-item-label> <q-btn flat class="full-width" target="_blank" href="https://drive.ifsp.edu.br/s/6FlzIah5KafcTrR" type="a" no-caps label="Atividades complementares" /></q-item-label>
          </q-item-section>
        </q-item>
          <q-item clickable v-close-popup >
            
          <q-item-section>
            <q-item-label> <q-btn flat class="full-width" target="_blank" href="https://www.facebook.com/PETADSIFSP/" type="a" no-caps label="PET" /></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
       
       
        <q-btn class="col-1" flat style="color: grey;" label="Produtos" to="/produtos" />
         <q-btn class="col-1" flat style="color: grey;" label="Eventos" >
        <q-tooltip>
          Em Construção
        </q-tooltip>
        </q-btn>
        <q-btn class="col-1" flat style="color: grey;" label="Há Vagas!" >
          <q-tooltip>
          Em Construção
        </q-tooltip>
        </q-btn>
      
        <q-btn class="col-1" flat style="color: grey;" label="Patrocínios" :to="{name:'Patrocinadores'}">
           <q-tooltip>
          Em Construção
        </q-tooltip>
        </q-btn>
        
        
      
         <div class="col-4  ">
           <div class="row justify-end" >
          <q-btn flat target="_blank" href="https://www.facebook.com/caads.ifsp.sanca" type="a">
          <q-icon size="md" color="grey" >
            <i class="fab fa-facebook"></i>
          </q-icon>
          </q-btn>
           <q-btn flat target="_blank" href="https://www.instagram.com/caads.ifsp.sanca" type="a">
           <q-icon size="md" color="grey" >
            <i class="fab fa-instagram"></i>
          </q-icon> </q-btn> 
          <q-btn flat target="_blank" href="https://scl.ifsp.edu.br/" type="a">
          <q-icon size="lg" color="grey" name="img:statics/icons/ifsp-logo.png" />
          </q-btn>
        </div>
        </div>
        </q-toolbar-title>

      </q-toolbar>
           
    </q-header>

   <q-drawer
   
        v-model="drawer"
        :width="220"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
         <q-list bordered class="rounded-borders">
            <q-item clickable v-ripple  class="text-black" to="/"> 
          <q-item-section avatar>
          <q-icon  name="home" />
        </q-item-section>
        <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{name:'Caads'}" class="text-black"> 
          <q-item-section avatar>
          <q-icon  name="group" />
        </q-item-section>
        <q-item-section>Quem somos</q-item-section>
        </q-item>

      <q-expansion-item
        expand-separator
        icon="star"
        label="Curso "
      >
      <q-card>
        <q-list bordered>
         <q-item clickable v-ripple>
        <q-item-section >
          <q-btn flat class="full-width" no-caps :to="{name:'Grade'}">O Profissional</q-btn> 
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple>


        <q-item-section >
          <q-btn flat class="full-width" no-caps :to="{name:'Grade'}">Grade Curricular </q-btn> 
        </q-item-section>
        </q-item>
       
        <q-item clickable v-ripple  >
        <q-item-section >
           <q-item-label> <q-btn flat class="full-width" target="_blank" href="https://drive.ifsp.edu.br/s/W9KfbmjhGLXvxJa" type="a" no-caps label="Horários de aulas" /></q-item-label>
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple  >

        <q-item-section >
          <q-btn flat class="full-width" target="_blank" href="https://drive.ifsp.edu.br/s/OgytR7nzZ7EPOja" type="a" no-caps label="Projeto Pedagógico" />
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple>

        <q-item-section>
          <q-btn flat class="full-width" target="_blank" href="https://drive.ifsp.edu.br/s/OyeAnex6RtmROky" type="a" no-caps label="Calendário" />
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple>

        <q-item-section>
          <q-btn flat class="full-width" target="_blank" href="https://drive.ifsp.edu.br/s/6FlzIah5KafcTrR" type="a" no-caps label="Atividades complementares" />
        </q-item-section>
        </q-item>
         <q-item clickable v-ripple  >

        <q-item-section >
          <q-btn flat class="full-width" target="_blank" href="https://www.facebook.com/PETADSIFSP/" type="a" no-caps label="PET" />
        </q-item-section>
        </q-item>
        </q-list>
      </q-card>
      </q-expansion-item>
       <q-expansion-item
        expand-separator
        icon="fas fa-university"
        label="IFSP"
      >
      <q-card>
        <q-list bordered>
        <q-item clickable v-ripple  >

        <q-item-section >
          <q-btn flat class="full-width" target="_blank" href="https://scl.ifsp.edu.br/" type="a" no-caps label="IFSP - São Carlos" />
        </q-item-section>
        </q-item>
       

        <q-item clickable v-ripple  >

        <q-item-section >
          <q-btn   flat class="full-width" target="_blank" href="https://suap.ifsp.edu.br/accounts/login/?next=/" type="a" no-caps label="Suap" />
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple>

        <q-item-section>
          <q-btn flat class="full-width" target="_blank" href="https://moodle.scl.ifsp.edu.br/login/index.php" type="a" no-caps label="Moodle" />
        </q-item-section>
         
        </q-item>
        <q-item>
          <q-item-section >
          <q-btn flat class="full-width"  no-caps label="Horários ônibus" :to="{name:'Horarios'}" />
        </q-item-section>
        </q-item>
        </q-list>
      </q-card>
      </q-expansion-item>
    
     <q-item clickable v-ripple :to="{name:'Produtos'}"> 
          <q-item-section avatar>
          <q-icon  name="shop" />
        </q-item-section>
        <q-item-section>Produtos</q-item-section>
        </q-item>
         <q-expansion-item
        disable=""
        expand-separator
        icon="fas fa-calendar-week"
        label="Eventos "
      >
        <q-card>
          <q-card-section>
            Em construção
          </q-card-section>
        </q-card>
      </q-expansion-item>
         <q-expansion-item
        disable=""
        expand-separator
        icon="business_center"
        label="Há Vagas! "
      >
        <q-card>
          <q-card-section>
            Em construção
          </q-card-section>
        </q-card>
      </q-expansion-item>
    
     
          <q-item clickable v-ripple  class="text-black" :to="{name:'Patrocinadores'}"> 
          <q-item-section avatar>
          <q-icon  name="fas fa-handshake" />
        </q-item-section>
        <q-item-section>Patrocinadores</q-item-section>
        </q-item>
         <q-expansion-item
        expand-separator
        icon="person_add"
        label="Redes Sociais "
      >
        <q-card>
           <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary"> 
            <i class="fab fa-facebook"></i>
          </q-icon>
        </q-item-section>

        <q-item-section><q-btn flat target="_blank" href="https://www.facebook.com/caads.ifsp.sanca" type="a" no-caps label="Facebook" /></q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="pink"  >
            <i class="fab fa-instagram"></i>
          </q-icon>
        </q-item-section>

        <q-item-section><q-btn flat target="_blank" href="https://www.instagram.com/caads.ifsp.sanca" type="a" no-caps label="Instagram" /></q-item-section>
      </q-item>
           </q-list>
        </q-card>
      </q-expansion-item>
         <q-item clickable v-ripple  class="text-black" @click="compartilhar"> 
          <q-item-section avatar>
          <q-icon  name="share" />
        </q-item-section>
        <q-item-section>Indique a um amigo</q-item-section>
        </q-item>
    </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="statics/icons/caads-dark.png" style="height: 150px"/>
     
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;
const { Share } = Plugins;


export default {
  name: 'MyLayout',

  data () {
    return {
      drawer: false,
      plat:''
    }
  },
  methods:{
    async platform(){
    this.plat = await Device.getInfo()
     this.$q.localStorage.set('plataforma',this.plat.operatingSystem)
     console.log(this.plat.operatingSystem)
    },
    async compartilhar(){
      await Share.share({
  title: 'CAADS APP',
  text: 'Olá! Adicione o aplicativo do Centro Acadêmico de ADS do IFSP - São Carlos',
  url: 'https://lucky-insurance.surge.sh',
  dialogTitle: 'Compartilhe com seus amigos'
});
    }
  },
  mounted(){
    this.platform()
  }
}
</script>
