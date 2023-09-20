<template>
  <div class="people">
    <img :src="source" alt="person" width="44" height="44" />
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
