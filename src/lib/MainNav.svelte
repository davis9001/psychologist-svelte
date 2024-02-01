<script>
  import Icon from "@iconify/svelte"
</script>

<nav class="p-4 text-secondary-900 z-10 absolute w-full bg-white bg-opacity-10">
  <div
    class="container max-w-screen mx-auto lg:max-w-8xl flex justify-between items-center"
  >
    <!-- Logo on the left -->
    <div class="">
      <a href="/" class=""
        ><Icon
          icon="arcticons:my-brain"
          class="text-secondary-300 inline mr-3"
          width="32"
        />
        <img src="/logo.webp" alt="Logo" class="h-4 lg:h-5 hidden md:inline" />
      </a>
    </div>

    <!-- Navigation items on the right -->
    <div class="flex gap-4 place-self-end">
      <a href="/" class="text-white">Home</a>
      <a href="/about" class="text-white">About</a>
      <a href="/services" class="text-white">Services</a>
      <a href="/contact" class="text-white">Contact</a>
    </div>
  </div>
</nav>
