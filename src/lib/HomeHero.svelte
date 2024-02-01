<section
  class="lg:flex items-center justify-center p-8 pt-36 2xl:min-h-screen overflow-hidden bg-gradient-to-tr from-primary-500 to-secondary-900 text-neutral-100"
>
  <div
    class="container max-w-9xl lg:flex justify-center items-center 2xl:main-h-screen"
  >
    <!-- Headshot with rounded corner -->
    <div class="hero-headshot w-10/12 lg:w-2/3">
      <img
        src="main-headshot.jpg"
        alt="Psychiatrist Headshot"
        class="rounded-2xl rounded-tr-[64px] w-full lg:w-2/3 mx-auto"
      />
    </div>

    <!-- Text on the right -->
    <div class="max-w-2xl">
      <h1 class="text-4xl 2xl:text-6xl font-bold my-4">
        Dr. Loraine K. Bailey
      </h1>
      <p class="text-2xl">
        Your supportive psychiatrist providing expert mental health care.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .hero-headshot {
    position: relative;
    z-index: 1;
  }
  .hero-headshot::before,
  .hero-headshot::after {
    @apply bg-primary-400;
    border-radius: 0 3em 0 0;
    width: 222px;
    height: 222px;
    transform: translate(-23%, -23%);
    filter: blur(10px);
    opacity: 0.3;
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
  }
  .hero-headshot::after {
    border-radius: 0 9em 0 0;
    filter: blur(20px);
    opacity: 0.2;
    width: 333px;
    height: 333px;
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }
</style>
