<template>
  <q-layout view="lhh  ">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
      
        />
      </q-toolbar>
      
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h1">Todo</div>
        <div class="text-subtitle1">{{ todaysDate   }}</div>
      </div>
        <q-img src="../statics/meandmywife.jpg"  
      class="header-image absolute-top" />
      
    
    </q-header>
  
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area style="height: calc(150% - 192px); margin-top: 250px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
            to="todo"
            exact 
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Todo
              </q-item-section>
            </q-item>

            <q-item 
            to="help"
            exact
            clickable 
            v-ripple>
             
              <q-avatar circle>
      <img src="src\statics\help.png" style="height:30px;width:30px"/>
    </q-avatar>
              <q-item-section>
                Help
              </q-item-section>
            </q-item>
            
            
            
            <q-item 
            to="Twitter"
            exact
            clickable 
            v-ripple>
             
              <q-avatar circle>
      <img src="src\statics\twitter.png" style="height:30px;width:30px"/>
    </q-avatar>
              <q-item-section>
                twitter
              </q-item-section>
            </q-item>
            <q-item 
            to="/facebook"
            exact
            clickable 
            v-ripple>
             
              <q-avatar circle>
      <img src="src\statics\facebook.png" style="height:30px;width:30px"/>
    </q-avatar>

              <q-item-section>
                Facebook
              </q-item-section>
            </q-item>
            <q-item 
            to="/instagram"
            exact
            clickable 
            v-ripple>
              
              <q-avatar circle>
      <img src="src\statics\instagram.jpg" style="height:30px;width:30px"/>
    </q-avatar>

              <q-item-section>
                Instagram
              </q-item-section>
            </q-item>
            <q-item 
            to="/chatgpt"
            exact
            clickable 
            v-ripple>
             
              <q-avatar circle>
      <img src="src\statics\chatgpt.png" style="height:30px;width:30px"/>
    </q-avatar>
              <q-item-section>
                Ask ChatGpt
              </q-item-section>
            </q-item>
            
            
            <q-item 
            to="/setting"
            exact 
            clickable 
            v-ripple>
            <q-avatar circle>
      <img src="src\statics\seting.png" style="height:60px;width:60px"/>
    </q-avatar>
              <q-item-section>
                Setting
              </q-item-section>
              </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../statics/image.jpg" style="height: 240px">
          <div class="absolute-bottom bg-transparent">
           
            <div class="text-weight-bold">Rahul Dixit</div>
            <div>@rahul</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
    </keep-alive>
    </q-page-container>
  </q-layout>
</template>
<script>

import { date } from 'quasar'

export default {
  name:'myLayout',
  data(){
    return{
      leftDrawerOpen: false
    }
  },
  computed:{
    todaysDate() {
      let timeStamp= Date.now()
      return date.formatDate(timeStamp,' dddd D MMMM')
  
    }
  }
}
</script>
<style lang="scss">
.header-image{
  height: 100%;
  z-index: -1;
  opacity: 1;

}

</style>
  


