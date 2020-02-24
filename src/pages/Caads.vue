<template>
  <q-page class="flex flex-start ">
    <div >
        <div class="text-h4 row text-orange " style="margin-left:50px">Quem somos</div>
      <br/>
        <div class="text-h6 row text-white" style="margin-left:50px; margin-top:20px"> 
        Somos o Centro Acadêmico do curso de ADS, nossa função é promover atividades sociais,<br/>
        culturais e desportivas, incentivar a interação entre o corpo docente e discente,<br/>
        representar e defender os direitos dos estudantes do curso de ADS.
        </div>
     <br>
     <q-list>
        <q-expansion-item
       style="margin-left:50px"
      class="text-white text-h6"
      label="Cordenadoria de Eventos"
      
    >
      <q-card class="bg-dark text-white">
        <q-card-section>
       Área responsável por organizar eventos do interesse dos acadêmicos, como calouradas, festas, semana da computação, congressos, encontros, palestras, entre outros.
        </q-card-section>
      </q-card>
    </q-expansion-item>
       <q-expansion-item
       style="margin-left:50px"
      class="text-white text-h6"
      label="Cordenadoria de Comunicação e Imprensa"
    >
      <q-card class="bg-dark text-white">
        <q-card-section>
         Área responsável por gerenciar as redes sociais, elaboração de publicações e divulgação de notícias referentes ao CAADS ou de interesse dos discentes do curso de ADS.
        </q-card-section>
      </q-card>
    </q-expansion-item>
      <q-expansion-item
      style="margin-left:50px"
      class="text-white text-h6"
      label="Coordenadoria de Esportes, Cultura e Extensão"
    >
      <q-card class=" bg-dark text-white">
        <q-card-section>
        Área responsável por promover a prática de esportes, tanto virtuais quanto físicos, e promover junto a isto a interação entre os alunos e a comunidade com eventos culturais e sociais.
        </q-card-section>
      </q-card>
    </q-expansion-item>
     </q-list>
      <div class="text-h4 row text-orange " style="margin-left:50px"><br>Membros</div>
      
    </div>
  <div class="row items-start" :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/willer.jpg" height="300px">
      <q-card-section class="text-orange bg-dark">
        <div class="text-h6">Presidente</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Willer</span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> willergmpaternostro@gmail.com</span></div>
      </q-card-section>
    </q-card>

    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/fabricio.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Vice-Presidente</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Fabrício</span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> fabricio.barbatana.f@gmail.com</span> </div>
       
      </q-card-section>
    </q-card>

     <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/adilso.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Tesoureiro</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Adilso</span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> adilso.a@aluno.ifsp.edu.br</span> </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/eduardo.jpg" height="300px"> 
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Secretário</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Eduardo</span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> eduardo.f@aluno.ifsp.edu.br</span> </div>
      </q-card-section>
    </q-card>

  </div>
   
  <div class=" row items-start " :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
    <q-card class="my-card col-sm-12 col-md " style="margin: 10px">
      <img src="statics/icons/gabriela.jpg" height="300px"> 

      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Coordenadora de Comunicação</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Gabriela Guimarães </span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> gabrielagn10@hotmail.com</span></div>
      </q-card-section>
    </q-card>

     <q-card class="my-card col-sm-12 col-md" style="margin: 10px" >
      <img src="statics/icons/rebeca.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6"> Coordenadora de ECE</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Rebeca Rodrigues </span> </div>
        <div class="text-subtitle2"> Email:<span class="text-white"> rebecarodrigues300@gmail.com</span></div>
      </q-card-section>
    </q-card>

    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/bleiner.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Coordenador de Eventos</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Bleiner Bertoluci Mathias </span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> bleiner.mathias@aluno.ifsp.edu.br</span> </div>
      </q-card-section>
    </q-card>

   
    
    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/suzy.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Assessora de Comunicação</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Suzy</span></div>
        <div class="text-subtitle2"> Email:</div>
      </q-card-section>
    </q-card>

  </div>
   <div class=" row items-start " :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
    <q-card class="my-card col-sm-12 col-md " style="margin: 10px">
      <img src="statics/icons/camila.jpg" height="300px"> 

      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Assessora de Comunicação</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Camila Roque </span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> camilarock11@hotmail.com</span></div>
      </q-card-section>
    </q-card>

     <q-card class="my-card col-sm-12 col-md" style="margin: 10px" >
      <img src="statics/icons/lorrayne.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Assessora de Eventos</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Lorrany Santos </span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> lorrany.santos@aluno.ifsp.edu.br </span> </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/giovani.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Assessor de Eventos</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Giovani Cappelaro </span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> giovani.cappelaro@hotmail.com</span> </div>
      </q-card-section>
    </q-card>

   
    
    <q-card class="my-card col-sm-12 col-md" style="margin: 10px">
      <img src="statics/icons/yuri.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Assessor de ECE</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> Yuri Leonel </span></div>
        <div class="text-subtitle2"> Email:<span class="text-white"> y.leonel@aluno.ifsp.edu.br</span> </div>
      </q-card-section>
    </q-card>

  </div>
   <div class=" row items-center" :style="platform == 'windows' || platform == 'linux'?'margin-top: 50px; margin-left:50px':'margin-top: 50px;'">
    <q-card class="my-card col-sm-12 col-md-4 " style="margin: 10px">
      <img src="statics/icons/roger.jpg" height="300px"> 

      <q-card-section  class="text-orange bg-dark">
       <div class="text-h6">Assessor de ECE</div>
       <div class="text-subtitle2"> Nome:<span class="text-white"> Roger Peratello </span> </div>
        <div class="text-subtitle2"> Email:</div>
      </q-card-section>
    </q-card>

     <q-card class="my-card col-sm-12 col-md-4" style="margin: 10px" >
      <img src="statics/icons/joao.jpg" height="300px">
      <q-card-section  class="text-orange bg-dark">
        <div class="text-h6">Assessor de ECE</div>
        <div class="text-subtitle2"> Nome:<span class="text-white"> João</span></div>
        <div class="text-subtitle2"> Email: </div>
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

