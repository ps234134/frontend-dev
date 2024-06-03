<script setup>
definePageMeta({
  layout: "landing",
  colorMode:"light",
  title: "EasyExercises",
  meta: [
    {
      name: "description",
      content: "EasyExercises is a platform designed to help individuals around the world reach their fitness goals. We provide detailed exercise instructions, customizable workout plans, and a supportive community to keep you motivated."
    },
    {
      name: "keywords",
      content: "fitness, exercises, workout, health, community"
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingExercises></LandingExercises>
    <LandingFeatures></LandingFeatures>
  </LandingContainer>
</template>
