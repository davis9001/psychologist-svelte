<script>
  import MainFooter from "$lib/MainFooter.svelte"
  import MainNav from "$lib/MainNav.svelte"
  import ServiceCard from "$lib/ServiceCard.svelte"
  import HeroSmall from "$lib/HeroSmall.svelte"
  import { servicesData } from "../../servicesData"
</script>

<main>
  <MainNav />
  <HeroSmall title="Services" />
  <div class="p-8 bg-gradient-to-br from-white to-neutral-100">
    <h2 class="text-3xl lg:text-4xl mb-8">Our Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each servicesData as { title, description, featured, image_url, url, button_color, button_text, from_color, to_color }, i}
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
      {/each}
    </div>
  </div>
  <MainFooter />
</main>
