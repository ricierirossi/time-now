<template>
  <div>{{ label }}</div>
</template>

<script>
export default {
  props: {
    buttonLabel: String,
  },
  data() {
    return {
      label: this.buttonLabel,
    };
  },
};
</script>
