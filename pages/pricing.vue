<template>
    <div class="section-1 p-2">
        <h1 class="font-xxl mb-1 text-align-center">
            Flexible Plans for Everyone.
        </h1>
        <p class="text-overcast">
            Our plans are made for everyone. Whether you're just starting out on
            social media, or have been on there for a long time, we have a plan
            that's right for you.
        </p>
        <div>
            <div class="display-f cg-20 jc-c ai-c mt-2 mb-2">
                <span :class="{ selected: isSelected }">Billed Monthly</span>
                <ToggleButton @select-bill="selectBill" />
                <span :class="{ selected: !isSelected }">Billed Yearly</span>
            </div>

            <div class="md-row wrap-wrap jc-sb">
                <FlexiblePlans
                    value="4"
                    :description="description[0]"
                    :socialNetworks="[true, true, false, true]"
                    class="border-ash border-radius-5 p-2 mb-2 md-width-40"
                />

                <FlexiblePlans
                    value="12"
                    :description="description[1]"
                    :socialNetworks="[true, true, true, true]"
                    class="border-ash border-radius-5 p-2 mb-2 md-width-40"
                />
                <FlexiblePlans
                    value="7"
                    :description="description[0]"
                    :socialNetworks="[true, true, false, false]"
                    class="border-ash border-radius-5 p-2 md-width-40"
                />
            </div>
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
            isSelected: true,
        };
    },
    methods: {
        selectBill() {
            this.isSelected = !this.isSelected;
        },
    },
};
</script>

<style lang="scss" scoped></style>
