<template>
    <div>
        <h1>params参数{{ $route.params.keyword }}</h1>
        <h1>query参数{{ $route.query.k }}</h1>
    </div>
</template>
<script>
export default {
    name: 'Search',
    data() {
        return {
        }
    },
    methods: {
    },
    created() {
    },
    mounted() {
        //console.log(this.$store)
    },
}

</script>
<style lang="scss" scoped></style>
