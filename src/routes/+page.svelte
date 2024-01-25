<script>
  import { servicesData } from "../servicesData"
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
          class="rounded-tr-[64px] w-full lg:w-2/3 mx-auto"
        />
      </div>

      <!-- Text on the right -->
      <div class="max-w-2xl">
        <h1 class="text-3xl 2xl:text-6xl font-bold my-4">
          Dr. Loraine K. Bailey
        </h1>
        <p class="text-2xl">
          Your supportive psychiatrist providing expert mental health care.
        </p>
      </div>
    </div>
  </section>

  <!-- Standard Content Sections -->
  <section class="p-16 pb-32 bg-stone-800 text-white">
    <!-- Services Section -->
    <div class="container max-w-9xl mx-auto">
      <h2 class="text-3xl lg:text-5xl mb-16">Primary Services</h2>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each servicesData as { title, description, featured }, i}
          {#if featured}
            <div
              class="bg-opacity-5 bg-blue-500 p-6 rounded-2xl rounded-tr-[42px]"
            >
              <h3
                class="text-2xl lg:text-3xl font-semibold mb-2 lg:p-6 text-gray-200 text-center"
              >
                {title}
              </h3>
              <p class="text-gray-100 lg:text-2xl lg:p-4">
                {description}
              </p>
              <!-- Add any icon or image related to the service if needed -->
            </div>
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
