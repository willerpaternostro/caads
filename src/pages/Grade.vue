<template>
<div class="q-pa-md">
  <div class="text-orange text-h4">Avaliação último ENADE</div> 
  <br>
     <q-rating
        value="4"
        size="3.5em"
        color="yellow-5"
        icon="star"
      /> 
      <br/>
      <br/>
    <div class="row " >
       <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        label="O Profissional"
        class="text-h5 text-orange"
        
      >
        <q-card>
          <q-card-section class="text-white text-h6 bg-dark">
            O (A) Tecnólogo (a) em Análise e Desenvolvimento de Sistemas está apto(a) a executar as seguintes funções: analisa, projeta,
desenvolve, testa, implanta e mantém sistemas computacionais de informação; avalia, seleciona, especifica e utiliza
metodologias, tecnologias e ferramentas da Engenharia de Software, linguagens de programação e bancos de dados; reconhece
a importância do pensamento computacional na vida cotidiana e sua aplicação em circunstâncias apropriadas e domínios
diversos; coordena equipes de produção de softwares; inova e empreende por meio de sistemas computacionais de informação;
vistoria, realiza perícia, avalia, emite laudo e parecer técnico em sua área de formação; conhece aspectos éticos, legais e
socioambientais de sua área de atuação.
          </q-card-section>
        </q-card>
      </q-expansion-item>
       </q-list>
     
        <q-card style="margin-top:50px" dark bordered class="full-width my-card  col-md-3 col-sm-12">
            <q-card-section>
            <div class="text-h6">1º SEMESTRE</div>

            </q-card-section>

            <q-separator dark inset />

            <q-markup-table dark separator="vertical" >
            <thead>
            <tr>
            <th class="text-left">Disciplina</th>
            <th class="text-right">Créditos</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td class="text-left">Algoritmos e Programação I</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Arq. e Organização de Computadores</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Comunicação e Expressão I</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Fundamentos da Matemática</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Introdução a Web</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Inglês para Computação I</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Introdução à Administração</td>
            <td class="text-right">2</td>

            </tr>
               <tr>
            <td class="text-left"></td>
            <td class="text-right"></td>
            </tr>
           
            </tbody>
            </q-markup-table>
        </q-card>

        <q-card style="margin-top:50px" dark bordered  class="full-width my-card offset-md-1 col-md-3 col-sm-12">
            <q-card-section>
            <div class="text-h6">2º SEMESTRE</div>

            </q-card-section>

            <q-separator dark inset />

            <q-markup-table dark separator="vertical">
            <thead>
            <tr>
            <th class="text-left">Disciplina</th>
            <th class="text-right">Créditos</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td class="text-left">Algoritmos e Programação II</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Comunicação e Expressão II</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Inglês para Computação II</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Matemática para a Computação</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Sistemas Operacionais</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Sistemas de Informação</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Programação para Web I</td>
            <td class="text-right">2</td>

            </tr>
               <tr>
            <td class="text-left"></td>
            <td class="text-right"></td>
            </tr>
           
            </tbody>
            </q-markup-table>
        </q-card>

        <q-card style="margin-top:50px" dark bordered class="full-width my-card  offset-md-1 col-md-3 col-sm-12">
            <q-card-section>
            <div class="text-h6">3º SEMESTRE</div>

            </q-card-section>

            <q-separator dark inset />

            <q-markup-table dark separator="vertical">
            <thead>
            <tr>
            <th class="text-left">Disciplina</th>
            <th class="text-right">Créditos</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td class="text-left">Banco de Dados I</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Engenharia de Software</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Estrutura de Dados</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Programação Orientada a Objetos</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Programação para Web II</td>
            <td class="text-right">4</td>

            </tr>
           
            <tr>
            <td class="text-left"></td>
            <td class="text-right"></td>

            </tr>
            
            <tr>
            <td class="text-left"></td>
            <td class="text-right"></td>

            </tr>
             
            <tr>
            <td class="text-left"></td>
            <td class="text-right"></td>
            </tr>
           
            </tbody>
            </q-markup-table>
        </q-card>

    </div>

    <div class="row " >
        <q-card style="margin-top:50px" dark bordered class="full-width my-card  col-md-3 col-sm-12">
            <q-card-section>
            <div class="text-h6">4º SEMESTRE</div>

            </q-card-section>

            <q-separator   />

            <q-markup-table dark separator="vertical">
            <thead>
            <tr>
            <th class="text-left">Disciplina</th>
            <th class="text-right">Créditos</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td class="text-left">Banco de Dados II</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Desenvolvimento Orientadoa Objetos</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">InteraçãoHumano-Computador</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Metodologia de Pesquisa</td>
            <td class="text-right">2</td>

            </tr>
            <tr>
            <td class="text-left">Programaçãopara a Web III</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left">Redes de Computadores I</td>
            <td class="text-right">4</td>

            </tr>
            <tr>
            <td class="text-left"></td>
            <td class="text-right"></td>

            </tr>
            </tbody>
            </q-markup-table>
        </q-card>

     <q-card style="margin-top:50px" dark bordered  class="my-card full-width offset-md-1 col-md-3 col-sm-12">
        <q-card-section>
        <div class="text-h6">5º SEMESTRE</div>

        </q-card-section>

        <q-separator dark inset />

        <q-markup-table dark separator="vertical">
        <thead>
        <tr>
        <th class="text-left">Disciplina</th>
        <th class="text-right">Créditos</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td class="text-left">Gestão de Projetos de Software</td>
        <td class="text-right">4</td>

        </tr>
        <tr>
        <td class="text-left">Probabilidade e Estatística</td>
        <td class="text-right">2</td>

        </tr>
        <tr>
        <td class="text-left">Programação para Disp. Móveis</td>
        <td class="text-right">4</td>

        </tr>
        <tr>
        <td class="text-left">Programação para Web IV</td>
        <td class="text-right">4</td>

        </tr>
        <tr>
        <td class="text-left">Redes de Computadores II</td>
        <td class="text-right">4</td>

        </tr>
        <tr>
        <td class="text-left">Tópicos em Computação I</td>
        <td class="text-right">2</td>

        </tr>
        <tr>
        <td class="text-left"></td>
        <td class="text-right"></td>

        </tr>
        </tbody>
        </q-markup-table>
    </q-card>

     <q-card style="margin-top:50px" dark bordered class="full-width my-card offset-md-1  col-md-3 col-sm-12">
        <q-card-section>
        <div class="text-h6">6º SEMESTRE</div>

        </q-card-section>

        <q-separator dark inset />

        <q-markup-table dark separator="vertical">
        <thead>
        <tr>
        <th class="text-left">Disciplina</th>
        <th class="text-right">Créditos</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td class="text-left">Auditoria e Segurança de Sistemas</td>
        <td class="text-right">4</td>

        </tr>
        <tr>
        <td class="text-left">Computação e Sociedade</td>
        <td class="text-right">2</td>

        </tr>
        <tr>
        <td class="text-left">Finanças e Análise de Investimentos</td>
        <td class="text-right">2</td>

        </tr>
          <tr>
        <td class="text-left">Empreendedorismo</td>
        <td class="text-right">4</td>
        </tr>

        <tr>
        <td class="text-left">Projeto de Sistemas</td>
        <td class="text-right">6</td>

        </tr>
      
        <tr>
        <td class="text-left">Tópicos em Computação II</td>
        <td class="text-right">2</td>

        </tr>
        <tr>
        <td class="text-left"></td>
        <td class="text-right"></td>

        </tr>
        </tbody>
        </q-markup-table>
    </q-card>
      </div>
       <div class="row items-start desktop-hide">
      <q-btn style="margin-top:50px"  class=" full-width  col-md-3 col-sm-12" color="amber-10" text-color="white" label="Projeto pedagógico"/>
      <q-btn style="margin-top:50px"  class="full-width  offset-md-1  col-md-3 col-sm-12"  color="amber-10" text-color="white" label="Calendário acadêmico"/>
      <q-btn style="margin-top:50px"  class=" full-width  offset-md-1  col-md-3 col-sm-12"  color="amber-10" text-color="white" label="Atividades complementares"/>
    </div> 
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
}
}
</script>