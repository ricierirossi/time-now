<template>
  <div class="people">
    <img :src="source" alt="person" width="100" height="100" />
  </div>
</template>

<script>
export default {
  props: {
    personNumber: String,
  },
  data() {
    return {
      source: `images/UA${this.personNumber}.png`,
    };
  },
};
</script>
