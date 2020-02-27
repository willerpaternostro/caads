<template>
  <q-page class="flex flex-start ">
    
        <div class="text-h4 row text-orange justify-center " style="margin-left:50px;margin-top:50px">
            <span>Patrocinadores </span></div>
    
  <div :class="platform == 'windows' || platform == 'linux'?'row justify-center':'row justify-start'" :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
    <q-card class="my-card col-sm-12 col-md-8" style="margin: 10px">
      <img src="statics/icons/patrocinio.jpg" height="300px">
      <q-card-section class="text-orange bg-dark">
        <div class="text-h6 text-white">Nome Patrocinador</div> <br>
        <div class="text-subtitle2"> Empresa: <span class="text-white"> XXX </span></div>
          <div class="text-subtitle2"> Descrição:<span class="text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed the eiusmod tempor 
              incidid ut labore et dolore magna aliqua. Isso significa que, no mínimo, veniam, 
              exigiu o exercício da nossa vontade, não é por isso que é excomodado por todo o mundo.
               velit esse cillum dolore eu fugi nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
               sunt in culp qui officia deserunt mollit anim id est laborum. "</span></div>
        <div class="text-subtitle2"> Site: xxx.com</div>
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
  mounted(){
    this.platform = this.$q.localStorage.getItem('plataforma')
  }
}
</script>

