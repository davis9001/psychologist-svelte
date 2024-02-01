<script>
  import MainNav from "$lib/MainNav.svelte" // Replace with the actual path to your MainNav component
  import MainFooter from "$lib/MainFooter.svelte" // Replace with the actual path to your MainFooter component
  import HeroSmall from "$lib/HeroSmall.svelte"
</script>

<main class="overflow-hidden">
  <MainNav />
  <HeroSmall title="Services" />

  <div
    class="bg-gradient-to-tr from-neutral-50 to-neutral-100 p-8 text-primary-950"
  >
    <section class="container mx-auto max-w-3xl">
      <h1 class="text-4xl font-bold mb-8">
        Dialectical Behavior Therapy (DBT)
      </h1>

      <!-- Introduction to DBT -->
      <section>
        <h2 class="text-2xl font-bold mb-4">Understanding DBT</h2>
        <p class="mb-4">
          Dialectical Behavior Therapy (DBT) is a specialized form of
          cognitive-behavioral therapy designed to help individuals with
          emotional regulation, interpersonal effectiveness, distress tolerance,
          and mindfulness. Developed by Dr. Marsha M. Linehan, DBT has proven
          effective in treating a variety of mental health conditions.
        </p>
      </section>

      <!-- Core Components of DBT -->
      <section>
        <h2 class="text-2xl font-bold mb-4">Core Components</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Mindfulness -->
          <div>
            <h3 class="text-xl font-bold mb-2">1. Mindfulness</h3>
            <p class="mb-4">
              Mindfulness skills in DBT emphasize being fully present in the
              moment, observing thoughts and feelings without judgment.
              Practicing mindfulness enhances self-awareness and emotional
              regulation.
            </p>
          </div>

          <!-- Distress Tolerance -->
          <div>
            <h3 class="text-xl font-bold mb-2">2. Distress Tolerance</h3>
            <p class="mb-4">
              Distress tolerance skills teach individuals how to cope with
              crises and high-stress situations without making impulsive
              decisions. These skills empower individuals to navigate challenges
              effectively.
            </p>
          </div>

          <!-- Emotion Regulation -->
          <div>
            <h3 class="text-xl font-bold mb-2">3. Emotion Regulation</h3>
            <p class="mb-4">
              Emotion regulation skills assist in identifying and managing
              intense emotions. Individuals learn to understand their emotional
              experiences and develop healthier ways of responding.
            </p>
          </div>

          <!-- Interpersonal Effectiveness -->
          <div>
            <h3 class="text-xl font-bold mb-2">
              4. Interpersonal Effectiveness
            </h3>
            <p class="mb-4">
              Interpersonal effectiveness skills focus on improving
              communication, assertiveness, and relationship-building. These
              skills enhance the ability to navigate social interactions
              successfully.
            </p>
          </div>
        </div>
      </section>

      <!-- Benefits of DBT -->
      <section>
        <h2 class="text-2xl font-bold mb-4">Benefits of DBT</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Improved emotional regulation and stability.</li>
          <li>Enhanced interpersonal relationships and communication.</li>
          <li>Effective coping mechanisms for stress and crises.</li>
          <li>Increased self-awareness and mindfulness.</li>
          <li>Reduced impulsive behaviors and self-harm tendencies.</li>
        </ul>
      </section>

      <!-- How DBT Works -->
      <section>
        <h2 class="text-2xl font-bold mb-4">How DBT Works</h2>
        <p class="mb-4">
          DBT combines individual therapy, group skills training, phone
          coaching, and consultation team support. Individual therapy sessions
          provide personalized guidance, while skills training groups focus on
          learning and practicing specific DBT skills. Phone coaching offers
          support between sessions, and consultation teams assist therapists in
          delivering effective treatment.
        </p>
      </section>

      <!-- Getting Started with DBT -->
      <section>
        <h2 class="text-2xl font-bold mb-4">Getting Started</h2>
        <p class="mb-4">
          If you are interested in starting DBT therapy or learning more about
          how it can benefit you, please contact us. Our team of trained
          professionals is here to support you on your journey to improved
          emotional well-being.
        </p>
      </section>
    </section>
  </div>
  <MainFooter />
</main>

<style>
  /* Add your own custom styles or use Tailwind CSS classes */
  /* Customize styling for different sections, headings, and paragraphs */
</style>
