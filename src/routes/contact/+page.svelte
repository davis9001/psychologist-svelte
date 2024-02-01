<script>
  import MainNav from "$lib/MainNav.svelte" // Replace with the actual path to your MainNav component
  import MainFooter from "$lib/MainFooter.svelte" // Replace with the actual path to your MainFooter component
  import HeroSmall from "$lib/HeroSmall.svelte"

  let formData = {
    name: "",
    email: "",
    message: "",
  }

  function handleSubmit() {
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }
</script>

<main>
  <MainNav />
  <HeroSmall title="Contact" />

  <section class=" p-8 bg-gradient-to-tr from-white to-secondary-100">
    <div class="container max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Contact</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div class="flex flex-col">
              <label for="name" class="text-lg font-medium">Name</label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                class="input"
                required
              />
            </div>

            <div class="flex flex-col">
              <label for="email" class="text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                class="input"
                required
              />
            </div>

            <div class="flex flex-col">
              <label for="message" class="text-lg font-medium">Message</label>
              <textarea
                id="message"
                bind:value={formData.message}
                rows="4"
                class="input"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>

        <!-- Contact Details and Google Maps -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Visit Us</h2>

          <!-- Address -->
          <div class="mb-4">
            <p class="text-lg font-medium">
              123 Main Street, Cityville, Country
            </p>
          </div>

          <!-- Phone -->
          <div class="mb-4">
            <p class="text-lg font-medium">Phone: +1 (123) 456-7890</p>
          </div>

          <!-- Google Maps Image (Replace with the actual static map image URL) -->
          <img
            src="https://via.placeholder.com/600x400"
            alt="Static Google Maps"
            class="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  </section>

  <MainFooter />
</main>

<style>
  /* Add your own custom styles or use Tailwind CSS classes */
  .input {
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 16px;
  }

  .btn {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .btn-primary {
    background-color: #3490dc;
    color: #fff;
  }
</style>
