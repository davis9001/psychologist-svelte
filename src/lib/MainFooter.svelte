<script>
  import Icon from "@iconify/svelte"

  // Define your links and additional information here
  const mainLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ]

  const socialLinks = [
    { icon: "cib:facebook-f", url: "https://www.facebook.com/" },
    { icon: "cib:twitter", url: "https://twitter.com/" },
    { icon: "cib:linkedin-in", url: "https://www.linkedin.com/" },
    { icon: "cib:instagram", url: "https://www.instagram.com/" },
  ]
</script>

<footer class="bg-secondary-950 text-neutral-50 p-8">
  <div class="container mx-auto flex flex-wrap justify-center">
    <div class="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
      <h3 class="text-lg font-bold mb-4">Main Links</h3>
      <div class="space-y-2">
        {#each mainLinks as { text, url }}
          <div>
            <a href={url} class="hover:underline">{text}</a>
          </div>
        {/each}
      </div>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/4 text-right">
      <h3 class="text-lg font-bold mb-4">Connect With Us</h3>
      <div class="flex gap-9 justify-end">
        {#each socialLinks as { icon, url }}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-primary-400 text-3xl"
          >
            <Icon {icon} />
          </a>
        {/each}
      </div>
    </div>
  </div>

  <p class="text-center mt-8">
    &copy; 2024 Dr. Loraine K Bailey. All rights reserved.
  </p>
</footer>
