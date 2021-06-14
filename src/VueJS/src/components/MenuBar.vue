<template>
    <div class="MenuBar">
        <div class="left">
            <button @click="eval(button.onClick)" v-for="button in buttons">
                {{ button.title }}
            </button>
        </div>

        <div class="center">
            <p>{{ title }}</p>
        </div>

        <div class="right">
            <button>
                <i class="fal fa-times"></i>
            </button>
        </div>
    </div>
</template>

<script src="../assets/scripts/MenuBar.ts"></script>

<style lang="less" scoped>
    @import "../assets/styles/MenuBar";
</style>