<template>
  <div>
    <h1>Flexible Plans for Everyone.</h1>
    <p>
      Our plans are made for everyone. Whether you're just starting out on
      social media, or have been on there for a long time, we have a plan that's
      right for you.
    </p>
    <div>
      <span>Billed Monthly</span>
      <!-- Toggle Button -->
      <span>Billed Yearly</span>
      <FlexiblePlans
        value="4"
        :description="description[0]"
        :socialNetworks="[true, true, false, true]"
      />
      <FlexiblePlans
        value="12"
        :description="description[1]"
        :socialNetworks="[true, true, true, true]"
      />
      <FlexiblePlans
        value="7"
        :description="description[0]"
        :socialNetworks="[true, true, false, false]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: [
        "Perfect plan if you're just starting out.",
        "Perfect plan if you're heavy user of social media.",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
