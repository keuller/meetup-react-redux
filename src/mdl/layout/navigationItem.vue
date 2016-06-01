<template>
    <a class='mdl-navigation__link' v-on:click='clickHandler'><slot></slot></a>
</template>

<script>
    export default { 
        methods: {
            clickHandler() {
                console.log('Link clicked!')
            }
        }
    }
</script>
