<template>
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8 border-b-2 border-gray-50">
      <div class="p-24 md:order-1 hidden md:block">
        <NuxtImg
          class="rounded-lg transition-transform transform hover:scale-125"
          src="/img/abt/hero-2.webp"
          alt="hero-exercise"
          loading="eager"
          format="webp"
          sizes="100vw sm:50vw md:400px"
        />
      </div>
  
      <div>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
          Welcome to <span class="text-red-800">Easy</span>Exercises
        </h1>
        <p class="text-lg mt-4 text-slate-600 max-w-xl">
         EasyExercises is a website where you can find a lot of exercises for in the gym or at home. <wbr> Get started and lets exercise together!
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <LandingLink
            href="/exercises" 
            rel="noopener"     
            styleName="primary"     
            >View exercises</LandingLink
          >
          <LandingLink
            size="lg"
            styleName="outline"
            rel="noopener"
            href="/about"
            >About</LandingLink
          >
        </div>
      </div>
    </main>
  </template>
  