<script>
  import { servicesData } from "../servicesData"
  import ServiceCard from "../lib/ServiceCard.svelte"
  import MainNav from "$lib/MainNav.svelte"
  import HomeHero from "$lib/HomeHero.svelte"
</script>

<main>
  <!-- Top Navigation -->
  <MainNav />
  <!-- Hero Section -->
  <HomeHero />

  <section
    class="p-8 py-16 lg:p-32 bg-stone-100 text-stone-800 overflow-hidden"
  >
    <div
      class="container max-w-9xl mx-auto lg:grid grid-cols-2 items-center justify-evenly gap-8 place-items-center"
    >
      <div>
        <h2 class="text-3xl lg:text-4xl">Get Results That Last</h2>
        <p class="text-xl my-8 mb-16">
          Specializing in Dialectical Behavioral Therapy (DBT), a proven method
          that helps individuals develop healthy coping skills.
        </p>
      </div>
      <div
        class="relative rounded-xl rounded-tr-3xl max-w-sm lg:max-w-3xl mx-auto before:block before:w-full before:h-2/3 before:-z-10 before:-top-8 before:-left-8 before:content-[''] before:absolute before:bg-secondary-500 before:rounded-xl before:rounded-tl-3xl before:opacity-[42%] before:blur-xl after:content-[''] z-10 after:block after:h-full after:w-2/3 after:-z-10 after:top-16 after:-right-12 after:absolute after:bg-primary-700 after:rounded-xl after:rounded-tr-3xl after:opacity-[42%] after:blur-xl"
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
  <section
    class="p-16 pb-32 bg-gradient-to-br from-secondary-700 to-secondary-900 text-stone-200"
  >
    <!-- Services Section -->
    <div class="container max-w-9xl mx-auto">
      <h2 class="text-3xl lg:text-4xl mb-16">Featured Services</h2>

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
