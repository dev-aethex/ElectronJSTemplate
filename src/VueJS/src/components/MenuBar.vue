<template>
    <div class="MenuBar">
        <div v-if="buttons" class="buttons">
            <button @click="eval(button.onClick)" v-for="button in buttons">
                {{ button.title }}
            </button>
        </div>

        <div class="title">
            <p>{{ title }}</p>
        </div>

        <div class="controlButtons">
            <button>
                <i class="fal fa-window-minimize"></i>
            </button>
            
            <button>
                <i class="fal fa-square"></i>
            </button>

            <button>
                <i class="fal fa-times"></i>
            </button>
        </div>
    </div>
</template>

<script src="../assets/scripts/MenuBar.ts"></script>

<style lang="less">
    @import "../assets/styles/MenuBar";
</style>