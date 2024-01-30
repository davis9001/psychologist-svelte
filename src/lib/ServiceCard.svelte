<script>
  export let title = ""
  export let description = ""
  export let url = ""
  export let image_url = "https://loremflickr.com/320/240/dog"
  export let from_color = "blue-500"
  export let to_color = "blue-900"
  export let button_color = "blue-800"
  export let button_text = "Learn More"
</script>

<div
  class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto hover:scale-110 duration-300"
>
  <div
    class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl rounded-tr-3xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-{from_color} to-{to_color}"
  >
    <img src={image_url} alt="" class="h-full w-full object-cover opacity-50" />
  </div>
  <div class="p-6">
    <h5 class="mb-2 text-xl font-semibold leading-snug tracking-normal">
      {title}
    </h5>
    <p class="text-base font-light leading-relaxed">
      {description}
    </p>
  </div>
  {#if url != ""}
    <div class="p-6 pt-0">
      <a
        href={url}
        data-ripple-light="true"
        type="button"
        class={"bg-" +
          button_color +
          " select-none rounded-lg  py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-" +
          button_color +
          "/20 transition-all hover:shadow-lg hover:shadow-" +
          button_color +
          "/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"}
      >
        {button_text}
      </a>
    </div>
  {/if}
</div>
