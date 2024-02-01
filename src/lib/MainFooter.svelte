<script>
  // Define your links and additional information here
  const mainLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ]

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "https://www.facebook.com/" },
    { icon: "fab fa-twitter", url: "https://twitter.com/" },
    { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/" },
  ]
</script>

<footer class="bg-secondary-950 text-neutral-50 p-8">
  <div class="container mx-auto flex flex-wrap justify-center">
    <div class="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
      <h3 class="text-lg font-bold mb-4">Main Links</h3>
      <div class="space-y-2">
        {#each mainLinks as { text, url }}
          <a href={url} class="block hover:underline">{text}</a>
        {/each}
      </div>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/4">
      <h3 class="text-lg font-bold mb-4">Connect With Us</h3>
      <div class="flex space-x-4">
        {#each socialLinks as { icon, url }}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-gray-400"
          >
            <i class={icon}></i>
          </a>
        {/each}
      </div>
    </div>
  </div>

  <p class="text-center mt-8">
    &copy; 2024 Dr. Loraine K Bailey. All rights reserved.
  </p>
</footer>

<style>
  /* No inline styles in this section, as we're using Tailwind CSS */
</style>
