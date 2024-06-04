<script setup>
useHead({
  title: "Home",
});
definePageMeta({
  layout: "landing",
  colorMode:"light",
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingExercises></LandingExercises>
    <LandingFeatures></LandingFeatures>
  </LandingContainer>
</template>
