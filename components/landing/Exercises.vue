<script>

import tricepDip from '../assets/img/exc/tricep-dip.webp';
import tricepPushdown from '../assets/img/exc/tricep-pushdown.jpg';
import overheadTricepExtension from '../assets/img/exc/overhead-tricep-extension.jpg';
import overheadPress from '../assets/img/exc/overhead-press.webp';
import lateralRaise from '../assets/img/exc/lateral-raise.jpg';
import frontRaise from '../assets/img/exc/front-raise.webp';

import benchPress from '../assets/img/exc/bench-press.jpg';
import inclineBenchPress from '../assets/img/exc/incline-bench-press.jpg';
import chestFly from '../assets/img/exc/chest-fly.jpg';
import deadlift from '../assets/img/exc/deadlift.webp';
import bentOverRow from '../assets/img/exc/bent-over-row.webp';
import latPulldown from '../assets/img/exc/lat-pulldown.jpg';
import squat from '../assets/img/exc/squat.jpg';
import legPress from '../assets/img/exc/leg-press.jpg';
import lunges from '../assets/img/exc/lunges.jpg';
import bicepCurl from '../assets/img/exc/bicep-curl.webp';
import hammerCurl from '../assets/img/exc/hammer-curl.jpg';
import chinUp from '../assets/img/exc/chin-up.webp';

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
    <UTabs :items="items" v-model="activeTabIndex">
      
    </UTabs>
    <div class="exercises-container">
      <div class="exercise-container" v-for="exercise in items[activeTabIndex].exercises" @click="openExercise(exercise)">
        <img :src="exercise.image" :alt="exercise.name">
        <h2>{{ exercise.name }}</h2>
      </div>
    </div>
    <div v-if="selectedExercise" class="modal-overlay">
      <div class="modal">
        <h2>{{ selectedExercise.name }}</h2>
        <img :src="selectedExercise.image" :alt="selectedExercise.name">
        <p>{{ selectedExercise.description }}</p>
        <button @click="selectedExercise = null" class="bg-red-800">Close</button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.exercises-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.exercise-container {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.exercise-container img {
  width: 100%;
  height: auto;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  width: 300px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.modal img {
  width: 100%;
  height: auto;
}

.modal button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>