<script>
  import MainNav from "$lib/MainNav.svelte" // Replace with the actual path to your MainNav component
  import MainFooter from "$lib/MainFooter.svelte" // Replace with the actual path to your MainFooter component
  import HeroSmall from "$lib/HeroSmall.svelte"
</script>

<main>
  <MainNav />

  <HeroSmall title="About" />

  <section class=" p-8">
    <div class="container mx-auto my-8 max-w-3xl">
      <div class="lg:flex gap-5 flex-row-reverse">
        <img
          src="main-headshot.jpg"
          alt="Psychiatrist Headshot"
          class="rounded-2xl rounded-tr-[64px] lg:w-1/3 m-5 mx-auto"
        />

        <div>
          <h2 class="text-4xl font-extralight mb-4">
            About Dr. Bailey's Practice
          </h2>

          <div class="mb-8">
            <p class="text-lg">
              At Dr. Bailey's practice, we believe in the transformative power
              of mental health and well-being. Dr. Bailey, a highly experienced
              and compassionate psychologist, is dedicated to helping
              individuals navigate life's challenges and find a path towards
              healing and growth.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-4xl font-extralight mb-4">Meet Dr. Bailey</h2>

      <div class="mb-8">
        <p class="text-lg">
          Dr. Bailey is a licensed psychologist with a wealth of experience in
          providing expert psychological care. With a deep understanding of
          human behavior and a commitment to personalized and empathetic
          therapy, Dr. Bailey creates a safe and supportive space for clients to
          explore their thoughts, feelings, and experiences.
        </p>
      </div>

      <h2 class="text-4xl font-extralight mb-4">Our Approach</h2>

      <div class="mb-8">
        <p class="text-lg">
          Dr. Bailey employs a holistic and evidence-based approach to mental
          health, integrating various therapeutic modalities tailored to each
          individual's unique needs. Whether you are seeking support for
          anxiety, depression, relationship issues, or personal development, Dr.
          Bailey is here to guide you on your journey to a healthier and more
          fulfilling life.
        </p>
      </div>

      <h2 class="text-4xl font-extralight mb-4">Core Values</h2>

      <div class="mb-8">
        <p class="text-lg">
          At the heart of Dr. Bailey's practice are integrity, compassion, and
          respect. Every client is treated with the utmost care and
          professionalism, fostering a collaborative and trusting therapeutic
          relationship. Dr. Bailey is committed to helping clients build
          resilience, develop coping strategies, and achieve their goals.
        </p>
      </div>

      <h2 class="text-4xl font-extralight mb-4">Get Started on Your Journey</h2>

      <div class="mb-8">
        <p class="text-lg">
          Embarking on the path to better mental health is a courageous and
          empowering decision. If you are ready to take the next step, Dr.
          Bailey welcomes you to reach out for a consultation. Together, we can
          explore your concerns, set goals, and work towards positive change.
          Your well-being is our priority, and we look forward to supporting you
          on your journey to mental and emotional wellness.
        </p>
      </div>
    </div>
  </section>

  <MainFooter />
</main>
