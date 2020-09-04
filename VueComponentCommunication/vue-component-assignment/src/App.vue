<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers v-on:getChosenServer="chosenServer = $event" v-bind:serverIsChanging="serverIsChanging"></servers>
            <app-server-details 
              v-bind:chosenServer="chosenServer"
              v-on:changeServerStatus="changeServerStatus"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
      data: function() {
        return {
          chosenServer: {
            id: NaN,
            status: 'Unknown'
          },
          serverIsChanging: {
            id: NaN,
            status: 'Unknown'
          }
        }
      },
      components: {
        appHeader: Header,
        Servers,
        'app-server-details': ServerDetails,
        'app-footer': Footer
      },
      methods: {
        getChosenServer: function(event) {
          console.log(event);
          this.chosenServer = event;
        },
        changeServerStatus: function(event) {
          console.log(event);
          this.serverIsChanging = event;
        }
      }
    }
</script>

<style>

</style>
