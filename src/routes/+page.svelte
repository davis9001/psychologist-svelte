<main>
  <!-- Top Navigation -->
  <nav class="2xl:flex p-4 text-slate-900 z-10 absolute w-full">
    <div class="flex gap-5 text-white text-xl">
      <a href="#"><img src="logo.png" alt="Logo to Home" /></a>
      <a href="#">Services</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section
    class="lg:flex items-center justify-center p-8 pt-36 2xl:min-h-screen overflow-hidden bg-gradient-to-tr from-indigo-500 to-slate-900 text-yellow-100"
  >
    <!-- Headshot with rounded corner -->
    <div class="hero-headshot w-1/2">
      <img
        src="main-headshot.jpg"
        alt="Psychiatrist Headshot"
        class="rounded-tr-[64px] w-full lg:w-2/3 mx-auto"
      />
    </div>

    <!-- Text on the right -->
    <div class="max-w-2xl">
      <h1 class="text-3xl 2xl:text-6xl font-bold mb-4">
        Dr. Loraine K. Bailey
      </h1>
      <p class="text-2xl">
        Your supportive psychiatrist providing expert mental health care.
      </p>
    </div>
  </section>

  <!-- Standard Content Sections -->
  <section class="p-8">
    <!-- Add your content sections here -->
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Our Services</h2>
      <p>
        Explore our range of mental health services designed to meet your unique
        needs.
      </p>
      <!-- Add more content sections as needed -->
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
    transform: translate(-50%, -50%);
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
