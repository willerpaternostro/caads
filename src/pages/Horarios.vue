<template>
<div class="q-pa-md">
  
    <div class="row justify-center" >
        <q-card style="margin-top:50px" dark bordered 
        :class=" plataforma == 'windows' ?'my-card  col-md-6 col-sm-12 col-lg-6':'my-card full-width  col-md-6 col-sm-12 '">
            <q-card-section>
            <div class="text-h6 text-center">Horários de ônibus IFSP</div>
            <div class="text-center">Segunda à Sexta</div>

            </q-card-section>

            <q-separator dark inset />

            <q-markup-table dark separator="vertical" >
            <thead>
            <tr>
            <th class="text-left">Rodoviária --> IFSP</th>
            <th class="text-right">IFSP --> Rodoviária</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td class="text-left">06:20</td>
            <td class="text-right">...</td>

            </tr>
            <tr>
            <td class="text-left">07:30</td>
            <td class="text-right">08:00</td>

            </tr>
            <tr>
            <td class="text-left">09:00</td>
            <td class="text-right">09:30</td>

            </tr>
            <tr>
            <td class="text-left">10:00</td>
            <td class="text-right">10:30</td>

            </tr>
            <tr>
            <td class="text-left">11:00</td>
            <td class="text-right">11:30</td>

            </tr>
            <tr>
            <td class="text-left">12:05</td>
            <td class="text-right">12:35</td>

            </tr>
            <tr>
            <td class="text-left">12:40</td>
            <td class="text-right">13:20</td>

            </tr>
               <tr>
            <td class="text-left">13:20</td>
            <td class="text-right">14:00</td>
            </tr>
             <tr>
            <td class="text-left">15:00</td>
            <td class="text-right">15:35</td>
            </tr>
             <tr>
            <td class="text-left">16:00</td>
            <td class="text-right">16:30</td>
            </tr>
             <tr>
            <td class="text-left">17:00</td>
            <td class="text-right">17:30</td>
            </tr>
             <tr>
            <td class="text-left">18:00</td>
            <td class="text-right">18:30</td>
            </tr>
             <tr>
            <td class="text-left">19:00</td>
            <td class="text-right">19:30</td>
            </tr>
             <tr>
            <td class="text-left">20:30</td>
            <td class="text-right">21:00</td>
            </tr>
             <tr>
            <td class="text-left">21:30</td>
            <td class="text-right">22:30</td>
            </tr>
                
            <tr>
            <td class="text-left text-h6 text-orange"> Horários no Sábado</td>
            </tr>
            <tr>
            <td class="text-left">07:30</td>
            <td class="text-right">07:50</td>
            </tr>
            <tr>
            <td class="text-left">12:20</td>
            <td class="text-right">12:40</td>
            </tr>
            </tbody>
            </q-markup-table>
        </q-card>
  </div>
  
</div>
</template>
<script>
export default {
  data () {
    return {
        plataforma:''
    }
},
mounted(){
    this.plataforma = this.$q.localStorage.getItem('plataforma')
}
}
</script>