<script>
  import { servicesData } from "../servicesData"
  import ServiceCard from "../lib/ServiceCard.svelte"
</script>

<main>
  <!-- Top Navigation -->
  <nav
    class=" flex justify-between items-center p-4 text-slate-900 z-10 absolute w-full"
  >
    <div class="container max-w-8xl mx-auto flex justify-between">
      <!-- Logo on the left -->
      <div class="flex items-center">
        <a href="/" class=""
          ><img src="logo.webp" alt="Logo" class="h-4 lg:h-5 mr-2" />
        </a>
      </div>

      <!-- Navigation items on the right -->
      <div class="flex items-center space-x-4">
        <a href="/" class="text-white">Home</a>
        <a href="#" class="text-white">About</a>
        <a href="#" class="text-white">Services</a>
        <a href="#" class="text-white">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section
    class="lg:flex items-center justify-center p-8 pt-36 2xl:min-h-screen overflow-hidden bg-gradient-to-tr from-indigo-500 to-slate-900 text-yellow-100"
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

  <section class="p-32 bg-stone-100 text-stone-800">
    <div
      class="container max-w-9xl mx-auto grid grid-cols-2 items-center justify-evenly gap-8 place-items-center"
    >
      <div>
        <h2 class="text-2xl lg:text-4xl">Get Results that Last</h2>
        <p class="text-xl my-6">
          Specializing in Dialectical Behavioral Therapy (DBT), a proven method
          that helps individuals develop healthy coping skills.
        </p>
      </div>
      <div
        class="relative before:block before:w-full before:h-2/3 before:-z-10 before:-top-8 before:-left-8 before:absolute before:bg-slate-500 before:rounded-xl before:rounded-tl-3xl after:content-[''] z-10 after:block after:h-full after:w-2/3 after:-z-10 after:top-16 after:-right-12 after:absolute after:bg-indigo-700 after:rounded-xl after:rounded-tr-3xl before:content-[''] bg-black rounded-xl rounded-tr-3xl"
      >
        <img
          class="h-full w-full object-cover rounded-xl rounded-tr-3xl"
          src="https://loremflickr.com/320/240/therapy"
          alt=""
        />
      </div>
    </div>
  </section>

  <!-- Featured Services -->
  <section class="p-16 pb-32 bg-slate-700 text-stone-200">
    <!-- Services Section -->
    <div class="container max-w-9xl mx-auto">
      <h2 class="text-2xl lg:text-4xl mb-16">Featured Services</h2>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each servicesData as { title, description, featured, image_url, url, button_color, button_text, from_color, to_color }, i}
          {#if featured}
            <ServiceCard
              {title}
              {description}
              {image_url}
              {url}
              {button_color}
              {button_text}
              {from_color}
              {to_color}
            />
          {/if}
        {/each}
      </div>
    </div>
  </section>

  <!-- Add more content sections as needed -->
</main>

<style lang="scss">
  .hero-headshot {
    position: relative;
    z-index: 1;
  }
  .hero-headshot::before,
  .hero-headshot::after {
    @apply bg-blue-400;
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
