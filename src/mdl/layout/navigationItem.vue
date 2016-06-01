<template>
    <a class='mdl-navigation__link' v-on:click.prevent='clickHandler'><slot></slot></a>
</template>

<script>
    export default {
        props: {
            event: { type: String }
        },
        methods: {
            clickHandler() {
                if (this.event) this.$dispatch(this.event)
            }
        }
    }
</script>
