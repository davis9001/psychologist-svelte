<script>
  export let title = "..."
</script>

<section
  class="pt-36 overflow-hidden bg-gradient-to-tr from-primary-500 to-secondary-900 text-neutral-100 h-14"
>
  <div
    class="container max-w-9xl lg:flex justify-center items-center -mt-[11rem]"
  >
    <!-- Headshot with rounded corner -->

    <!-- Text on the right -->
    <div class="max-w-2xl w-1/2">
      <h1
        class="text-[9rem] opacity-15 text-6xl 2xl:text-[12rem] font-bold my-4 text-center"
      >
        {title}
      </h1>
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
