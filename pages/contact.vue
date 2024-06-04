<script setup>
useHead({
  title: "Contact",
});
definePageMeta({
  layout: "landing",
  colorMode:"light",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc
        >We are <span class="text-red-800">Easy</span>Exercises</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Get in Touch with Our Team
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Have a question or feedback? We're here to help. Fill out the form or
          send us an email.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <font-awesome-icon
              class="text-gray-400 w-4 h-4"
              icon="map-marker-alt"
            />
            <span>Eindhoven, The Netherlands</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <font-awesome-icon
              class="text-gray-400 w-4 h-4"
              icon="envelope"
            /><a href="mailto:info@easyexercises.com">info@easyexercises.com</a>
          </div>
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
