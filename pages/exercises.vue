<script setup>
definePageMeta({
  layout: "landing",
  colorMode:"light",
  title: "Exercises",
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
        <LandingSectionhead>
      <template v-slot:title>Exercises</template>
      <template v-slot:desc>We are <span class="text-red-800">Easy</span>Exercises</template>
    </LandingSectionhead>
    <LandingExercises></LandingExercises>
    </LandingContainer>
</template>
