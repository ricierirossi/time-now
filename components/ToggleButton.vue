<template>
    <label class="switch">
        <input type="checkbox" @click="selectBill" />
        <span class="slider round"></span>
    </label>
</template>

<script>
export default {
    methods: {
        selectBill() {
            this.$emit("select-bill");
        },
    },
};
</script>
