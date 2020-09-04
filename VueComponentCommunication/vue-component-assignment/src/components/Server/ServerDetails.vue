<template>
    <div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details have ID {{chosenServer.id}} and Status {{chosenServer.status}}.</p>
        </div>

        <div class="col-xs-12 col-sm-6">
            <button v-on:click="changeServerStatus" class="btn btn-primary">Change it to {{chosenServer.status === 'Critical' ? 'Normal' : 'Critical'}}</button>
        </div>
    </div>

</template>

<script>
export default {
    props: ['chosenServer'],
    methods: {
        changeServerStatus: function() {
            var currentServer = this.chosenServer;
            // console.log(currentServer);
            var currentServerStatus = currentServer.status;

            if (currentServerStatus == 'Normal')
                currentServerStatus = 'Critical';
            else 
                currentServerStatus = 'Normal';

            currentServer.status = currentServerStatus;

            this.$emit('changeServerStatus', currentServer);
        }
    }
}
</script>

<style>

</style>
