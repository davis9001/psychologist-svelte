<script>
  export let title = "..."
</script>

<section
  class="pt-36 overflow-hidden bg-gradient-to-tr from-primary-500 to-secondary-900 text-neutral-100 h-14"
>
  <div class="container relative max-w-9xl lg:flex justify-center items-center">
    <h1
      class="opacity-50 absolute bottom-0 -left-12 text-base text-[11rem] 2xl:text-[12rem] font-bold my-4 text-center text-shadow select-none"
    >
      {title}
    </h1>
  </div>
</section>

<style lang="scss">
  .text-shadow {
    text-shadow: 222px -22px 100px rgba(255, 255, 255, 1);
    color: transparent;
  }
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
