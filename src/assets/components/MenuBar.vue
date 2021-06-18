<template>
    <div class="MenuBar">
        <div v-if="buttons" class="section left ignoreDrag">
            <button v-for="button in buttons">
                {{ button.title }}
            </button>
        </div>

        <div class="section center">
            <span>{{ title }}</span>
        </div>

        <div class="section right ignoreDrag">
            <button>
                <i class="fal fa-minus"></i>
            </button>

            <button>
                <i class="fal fa-square"></i>
            </button>
            
            <button @click="windowClose()">
                <i class="fal fa-times"></i>
            </button>
        </div>
    </div>
</template>

<script lang="typescript">
    export default {
        props: ["title", "buttons"],
        methods: {
            windowClose() {
                this.$mainProcess.send({
                    for: "electron",
                    command: "windowClose"
                });
            }
        }
    }
</script>

<style src="../styles/MenuBar.less" lang="less"></style>