<script>
  import MainFooter from "$lib/MainFooter.svelte"
  import MainNav from "$lib/MainNav.svelte"
  import ServiceCard from "$lib/ServiceCard.svelte"
  import SmallHero from "$lib/SmallHero.svelte"
  import { servicesData } from "../../servicesData"
</script>

<main>
  <MainNav />
  <SmallHero title="Services" />
  <div class="p-8 bg-gradient-to-br from-white to-neutral-100">
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
