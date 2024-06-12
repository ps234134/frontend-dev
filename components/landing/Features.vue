<script setup>
const features = [
  {
    title: "Choose Your Muscle Group",
    description:
      "Select the muscle group you want to focus on and get a list of the best exercises for it.",
    icon: "briefcase",
  },
  {
    title: "Detailed Exercise Instructions",
    description:
      "Each exercise comes with detailed instructions and images to ensure you're doing it right.",
    icon: "bullhorn",
  },
  {
    title: "Customizable Workout Plans",
    description:
      "Create your own workout plan by adding exercises to your personal list.",
    icon: "bullseye",
  },
  {
    title: "Track Your Progress",
    description:
      "Keep track of your progress over time and see how you're improving.",
    icon: "chart-line",
  },
  {
    title: "Share Your Success",
    description:
      "Share your progress and achievements with your friends and inspire them to join you.",
    icon: "check-circle",
  },
  {
    title: "Join the Community",
    description:
      "Become a part of our community and get support and motivation from other members.",
    icon: "user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-24 text-center">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      <span class="text-red-800">Everything </span>you need for your workout
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Our platform provides you with the best exercises, customizable workout plans, progress tracking, and a supportive community.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <font-awesome class="text-white pb-2" :icon="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>