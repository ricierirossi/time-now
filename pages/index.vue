<template>
  <div>
    <div class="section-1 p-2">
      <h2 class="text-night font-xl mb-1">
        Post when your audience is most active.
      </h2>
      <p class="text-overcast font-md mb-1">
        With TimeNow, automatically schedule your post on Twitter, LinkedIn, and
        Instagram to post when your followers are most active.
      </p>
      <div class="display-f mb-1">
        <MyButton class="bt-blue" buttonLabel="Start Scheduling" />
        <MyButton class="bt-white" buttonLabel="View Demo" />
      </div>
      <div class="display-f">
        <svg
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="graphics-symbol"
          aria-labelledby="shield"
        >
          <path
            d="M9 0C5.629 2.866 3.516 3 0 3V14.535C0 19.138 3.203 20.339 9 24C14.797 20.339 18 19.138 18 14.535V3C14.484 3 12.371 2.866 9 0ZM8.452 15L5 11.638L6.237 10.399L8.452 12.522L12.834 8.047L14.072 9.285L8.452 15Z"
            fill="#049372"
          />
        </svg>
        <div class="text-overcast ml-1">
          <p>TimeNow does not sell your data.</p>
          <p class="weight-700" style="text-decoration: underline">
            Learn more
          </p>
        </div>
      </div>
    </div>
    <div class="section-2 p-2 bg-sky display-f jc-c">
      <img
        src="images/Mockup.png"
        alt="Analytics example"
        width="300"
        height="300"
      />
    </div>
    <div class="section-3 p-2">
      <h2 class="text-night font-xl">
        TimeNow is used by the most influential people.
      </h2>
      <div class="display-f wrap-wrap cg-10 rg-5">
        <span v-for="n in 8">
          <PersonPicture :personNumber="n" />
        </span>
      </div>
      <p class="text-overcast">
        The most influential people on Facebook, Twitterm and Instagram are
        using TweetNow to schedule post when their followers are most active.
      </p>
      <p class="text-overcast">
        They generally receive 23% more engagement than people who do not.
      </p>
    </div>
    <div class="section-4 p-2 bg-pool">
      <h3 class="text-sea">Unified Dashboard</h3>
      <h2 class="text-overcast font-xl">
        Customizable dashboards for all platforms.
      </h2>
      <p class="text-overcast">
        Use Twitter and Instagram but not LinkedIn? You can customize your
        dashboard to your liking. You can even schedule the same post to
        individual platforms instead all platforms.
      </p>
      <MyButton class="bt-blue" buttonLabel="Start Scheduling" />
      <h3 class="text-sea">Enchanced Analytics</h3>
      <h2 class="text-overcast font-xl">
        Real-time data that tells you everything.
      </h2>
      <p class="text-overcast">
        Get detailed reports of what's working and what's isn't. Egagement
        rates, impressions, views, and much more data is available to you
        through our in-depth dashboard tool.
      </p>
      <MyButton class="bt-white" buttonLabel="View Live Demo ➔" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
