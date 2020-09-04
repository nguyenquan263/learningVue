<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li style="cursor: pointer"
                class="list-group-item list-group-item-action" 
                v-for="(server,index) in servers" 
                v-bind:key="index">
                <div v-on:click="serverClicking(server)">
                    Server #{{ server.id }} -- {{server.status}}
                </div>
            </li>
        </ul>

        <p>U want to change server with ID {{serverIsChanging.id}} -- {{serverIsChanging.status}}</p>
    </div>
</template>

<script>
export default {
    props: ['serverIsChanging'],
    data: function() {
        return {
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Normal'},
                {id: 4, status: 'Normal'},
                {id: 5, status: 'Normal'}
            ]
        }
    },
    methods: {
        serverClicking: function(server) {
            this.$emit('getChosenServer', server);
        }
    }
}
</script>

<style>

</style>
