<template>
    <div class="View">
        <MenuBar title="My Application Lol" :buttons="[
            {
                title: 'File'
            },
            {
                title: 'Edit'
            },
            {
                title: 'About'
            }
        ]" />
    </div>
</template>

<script lang="typescript" src="./assets/scripts/_View.ts"></script>
<style lang="less" src="./assets/styles/_View.less"></style>