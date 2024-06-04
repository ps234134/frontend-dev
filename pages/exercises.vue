<script setup>
useHead({
  title: "Exercises",
});
definePageMeta({
  layout: "landing",
  colorMode:"light",
});
</script>

<template>
    <LandingContainer>
        <LandingSectionhead>
      <template v-slot:title>Exercises</template>
      <template v-slot:desc>We are <span class="text-red-800">Easy</span>Exercises</template>
    </LandingSectionhead>
    <LandingExercises></LandingExercises>
    </LandingContainer>
</template>
