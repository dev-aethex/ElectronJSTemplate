<template>
    <div class="View">
        <MenuBar ref="File" title="ElectronJS Template" />
    </div>
</template>

<script lang="ts">
    import MenuBar from "./components/MenuBar.vue";

    export default {
        components: {
            MenuBar
        }
    }
</script>

<style lang="less" scoped>
    @import "./assets/styles/config/__Config";
    @import "./assets/styles/__View";
</style>