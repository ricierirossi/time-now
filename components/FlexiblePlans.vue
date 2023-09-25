<template>
    <div class="text-overcast">
        <p class="pb-1">
            <span class="font-xl text-black"
                ><b>${{ value }}</b></span
            ><span class="text-overcast">/mo</span>
        </p>
        <span>{{ description }}</span>
        <hr class="mt-2 mb-2" />
        <div class="display-f direction-col rg-10 mb-2">
            <div
                class="display-f ai-c cg-10"
                v-if="socialNetworks && socialNetworks[0]"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                        fill="#46C487"
                    />
                </svg>
                <span>LinkedIn Integration</span>
            </div>
            <div
                class="display-f ai-c cg-10"
                v-if="socialNetworks && socialNetworks[1]"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                        fill="#46C487"
                    />
                </svg>
                <span>X Integration</span>
            </div>
            <div
                class="display-f ai-c cg-10"
                v-if="socialNetworks && socialNetworks[2]"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                        fill="#46C487"
                    />
                </svg>

                <span>Instagram Integration</span>
            </div>
            <div
                class="display-f ai-c cg-10"
                v-if="socialNetworks && socialNetworks[3]"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                        fill="#46C487"
                    />
                </svg>
                <span>Real-time Analytics</span>
            </div>
        </div>
        <MyButton class="bt-blue bt-blue-big" buttonLabel="Subscribe Now" />
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        description: String,
        socialNetworks: Array,
    },
};
</script>
