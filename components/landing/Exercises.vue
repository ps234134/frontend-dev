<script>

import tricepDip from '/img/exc/tricep-dip.webp';
import tricepPushdown from '/img/exc/tricep-pushdown.webp';
import overheadTricepExtension from '/img/exc/overhead-tricep-extension.webp';
import overheadPress from '/img/exc/overhead-press.webp';
import lateralRaise from '/img/exc/lateral-raise.webp';
import frontRaise from '/img/exc/front-raise.webp';

import benchPress from '/img/exc/bench-press.webp';
import inclineBenchPress from '/img/exc/incline-bench-press.webp';
import chestFly from '/img/exc/chest-fly.webp';
import deadlift from '/img/exc/deadlift.webp';
import bentOverRow from '/img/exc/bent-over-row.webp';
import latPulldown from '/img/exc/lat-pulldown.webp';
import squat from '/img/exc/squat.webp';
import legPress from '/img/exc/leg-press.webp';
import lunges from '/img/exc/lunges.webp';
import bicepCurl from '/img/exc/bicep-curl.webp';
import hammerCurl from '/img/exc/hammer-curl.webp';
import chinUp from '/img/exc/chin-up.webp';

export default {
  data() {
    return {
      selectedExercise: null,
      activeTabIndex: 0,
      items: [                                                                                                                                                                                                                                                                                                                                        
      {
          label: 'Chest',
          exercises: [
          { name: 'Bench Press', image: benchPress, description: 'A compound exercise that targets the chest, shoulders, and triceps.' },
          { name: 'Incline Bench Press', image: inclineBenchPress, description: 'Targets the upper chest and shoulders more than the regular bench press.' },
          { name: 'Chest Fly', image: chestFly, description: 'Isolates the chest muscles by eliminating the triceps from the movement.' },
          ]
        },
        {
          label: 'Back',
          exercises: [
          { name: 'Deadlift', image: deadlift, description: 'A compound exercise that targets the entire back, as well as the hips and legs.' },
          { name: 'Bent Over Row', image: bentOverRow, description: 'Targets the middle back, lats, and biceps.' },
          { name: 'Lat Pulldown', image: latPulldown, description: 'Isolates the lats to build width in the upper body.' },
          ]
        },
        {
          label: 'Legs',
          exercises: [
          { name: 'Squat', image: squat, description: 'A compound exercise that targets the entire lower body, including the quads, hamstrings, and glutes.' },
          { name: 'Leg Press', image: legPress, description: 'Targets the quads, hamstrings, and glutes, but with less lower back involvement than the squat.' },
          { name: 'Lunges', image: lunges, description: 'Targets the quads, hamstrings, and glutes, and also improves balance and coordination.' },
          ]
        },
        {
          label: 'Triceps',
          exercises: [
          { name: 'Tricep Dip', image: tricepDip, description: 'Targets the triceps, chest, and shoulders.' },
          { name: 'Tricep Pushdown', image: tricepPushdown, description: 'Isolates the triceps for maximum development.' },
          { name: 'Overhead Tricep Extension', image: overheadTricepExtension, description: 'Targets the long head of the triceps.' },
          ]
        },
        {
          label: 'Shoulders',
          exercises: [
          { name: 'Overhead Press', image: overheadPress, description: 'A compound exercise that targets the shoulders, triceps, and upper chest.' },
          { name: 'Lateral Raise', image: lateralRaise, description: 'Isolates the lateral deltoids for width and definition.' },
          { name: 'Front Raise', image: frontRaise, description: 'Targets the anterior deltoids.' },
          ]
        },
        {
          label: 'Biceps',
          exercises: [
          { name: 'Bicep Curl', image: bicepCurl, description: 'Isolates the biceps for maximum growth.' },
          { name: 'Hammer Curl', image: hammerCurl, description: 'Targets the brachialis and brachioradialis muscles as well as the biceps.' },
          { name: 'Chin-Up', image: chinUp, description: 'A compound exercise that targets the biceps and upper back.' },
          ]
        },
        
       
      ],
    }
  },
  methods: {
    openExercise(exercise) {
      this.selectedExercise = exercise;
    },
  },
}
</script>

<template>
  <div class="pt-16">
    <UTabs :items="items" v-model="activeTabIndex"></UTabs>
    <div class="flex justify-center flex-wrap">
      <div class="flex flex-col w-48 m-2 p-2 border border-gray-300 rounded text-center cursor-pointer justify-between" v-for="exercise in items[activeTabIndex].exercises" @click="openExercise(exercise)">
        <NuxtImg :src="exercise.image" :alt="exercise.name" sizes="100vw sm:50vw md:400px"/>
        <h2 class="pt-6 font-bold text-red-800">{{ exercise.name }}</h2>
      </div>
    </div>
    <div v-if="selectedExercise" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[100]">
      <div class="w-72 p-5 bg-white border border-gray-300 rounded text-center">
        <h2>{{ selectedExercise.name }}</h2>
        <NuxtImg :src="selectedExercise.image" :alt="selectedExercise.name" sizes="100vw sm:50vw md:400px"/>
        <p>{{ selectedExercise.description }}</p>
        <button @click="selectedExercise = null" class="mt-5 px-5 py-2 border-none text-white bg-red-800 rounded cursor-pointer">Close</button>
      </div>
    </div>
  </div>
</template>
