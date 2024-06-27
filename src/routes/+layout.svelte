<script>
  import '../app.pcss';
</script>

<div class="relative mx-auto max-w-7xl bg-white sm:px-6 lg:px-8">
  <!-- Header -->
  <header class="inset-x-0 top-0 z-50">
    <!-- Desktop -->
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>

      <div class="flex gap-x-12">
        <a href="/page-one" class="text-sm font-semibold leading-6 text-gray-900"
          >Page one</a
        >
        <a href="/page-three" class="text-sm font-semibold leading-6 text-gray-900"
          >Page three</a
        >
      </div>
    </nav>
  </header>

  <slot />
</div>
