<template>
  <div>
      <div class="menu">
        <button
          v-for="(item, index) in menuItems"
          :key="index"
          @click="goToItem(index)"
          :class="{ 'active': index === currentIndex }"
        >
          {{ item }}
        </button>
    </div>

    <div class="slider-container">
      <transition name="slide" mode="out-in">
        <div :key="currentIndex" class="slider-item">
          <!-- Content for each section goes here -->
          <component v-if="currentIndex === 0" :is="components.HomeComponent" :title="homeStaticData.title" :msg="homeStaticData.introText" />
            <!-- Add your about section content here -->
          <div v-else-if="currentIndex === 2">
            <h1>Educational Background</h1>
            <!-- Add your educational background section content here -->
          </div>
          <div v-else-if="currentIndex === 3">
            <h1>Contact Us</h1>
            <!-- Add your contacts section content here -->
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  data() {
    return {
      currentIndex: 0,
      previousIndex: null, 
      menuItems: ["Home", "About", "Educational Background", "Contacts"],
      homeStaticData: {
        title: "Welcome to Our Home",
        introText: "Explore and learn more about our wonderful home. We are excited to share our story with you."
      },
     
      components: {
        HomeComponent,
      
      }
    };
  },
  methods: {
   goToItem(index) {
      this.previousIndex = this.currentIndex;
      this.currentIndex = index;
    }
  }
};
</script>

<style>
.menu {
  margin-top: 20px;
}

.menu button {
  margin-right: 10px;
  font-size: 16px;
}

.menu button.active {
  font-weight: bold;
}

.slider-container {
  overflow: hidden;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 1s ease; /* Adjust the transition duration and easing */
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to, .slide-leave {
  transform: translateX(0);
}

</style>
