<template>
<header :class="{ 'header-top': currentIndex !== 0 }" id="header">
   <div class="container-fluid w-75 " :class="{ 'text-start': currentIndex === 0 }">
      <div class="menu my-3 d-flex justify-content-between align-items-center" v-if="currentIndex !== 0">
        <!-- Menu buttons are rendered when currentIndex is 0 -->
         <div>
            <h2 class="fw-bold text-white">{{homeStaticData.firstName}} {{homeStaticData.lastName}}</h2>
         </div>
         <div>
<button
          v-for="(item, index) in menuItems"
          :key="index"
          @click="goToItem(index)"
          :class="{ 'active': index === currentIndex }"
        >
          {{ item }}
        </button>
         </div>
        
      </div>

    <div class="slider-container">
      <transition name="slide" mode="out-in">
        <div :key="currentIndex" class="slider-item">
          <!-- Content for each section goes here -->
          <component v-if="currentIndex === 0" :is="components.HomeComponent" :firstName="homeStaticData.firstName" :lastName="homeStaticData.lastName" :title="homeStaticData.title" :msg="homeStaticData.introText" />
          <component v-else-if="currentIndex === 1" 
          :is="components.AboutComponent" 
          :bday="aboutStaticData.bday" 
          :website="aboutStaticData.website" 
          :phone="aboutStaticData.phone"  
          :city="aboutStaticData.city"  
          :age="aboutStaticData.age"  
          :degree="aboutStaticData.degree"  
          :email="aboutStaticData.email"  
          :description="aboutStaticData.description" 
          :objective="aboutStaticData.objective" 
          :msg="aboutStaticData.title"/>
            <!-- Add your about section content here -->
          <component v-else-if="currentIndex === 2" 
          :is="components.ResumeComponent"
          />
            
            <!-- Add your educational background section content here -->
          <component v-else-if="currentIndex === 3" 
          :is="components.ContactusComponent"
          :phone="contactStaticData.phone"  
          :city="contactStaticData.city"  
          :email="contactStaticData.email"  
          />
        </div>
      </transition>
    </div>
      <div class="menu" v-if="currentIndex === 0">
        <button
          v-for="(item, index) in menuItems"
          :key="index"
          @click="goToItem(index)"
          :class="{ 'active': index === currentIndex }"
        >
          {{ item }}
        </button>
      </div>
  </div>
</header>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import ResumeComponent from '@/components/ResumeComponent.vue'
import ContactusComponent from '@/components/ContactusComponent.vue'

export default {
  data() {
    return {
      currentIndex: 0,
      previousIndex: null, 
      menuItems: ["Home", "About", "Resume", "Contacts"],
      homeStaticData: {
        firstName: 'Locel',
        lastName: 'F. Degamo',
        title: "Welcome to Our Home",
        introText: "I'm a passionate graphic and web designer"
      },
      aboutStaticData: {
        title: "Welcome to Our About",
        bday: "January 31, 2001",
        website: " ",
        phone: "0902321232",
        city: "Camolinas Poblacion Cordova, Cebu 6017",
        age: 21,
        degree: "Bachelor of Science in Information Technology",
        email: "jealoceldegamo@gmail.com",
        description: "Hello! I'm a creative professional specializing in UI/UX design, graphic design, and website development. I bring ideas to life through visually compelling interfaces and seamless user experiences. Let's collaborate to create something extraordinary!",
        objective: "Seeking a challenging career with a progressive organization thatprovides an opportunity to capitalize my technical skills and abilities in the field of information technology (IT).",
        introText: "Explore and learn more about our wonderful home. We are excited to share our story with you."
      },
      contactStaticData: {
        city: "Camolinas Poblacion Cordova, Cebu 6017",
        email: "jealoceldegamo@gmail.com",
        phone: "0902321232",
      },
      components: {
        HomeComponent,
        AboutComponent,
        ResumeComponent,
        ContactusComponent
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
  border: none;
  background: none;
  color: white;
}

.menu button.active {
  font-weight: bold;
  border-bottom: 3px solid #35e788;;
}

.slider-container {
  overflow: hidden;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.2ease; /* Adjust the transition duration and easing */
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to, .slide-leave {
  transform: translateX(0);
}
body {
font-family: "Open Sans", sans-serif!important;
color: white;
}
 body::before {
        content: "";
        position: fixed;
        background: #040404 url('../assets/img/bg.jpg') top right no-repeat;
        background-size: cover;
        left: 0;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: -1;
}
#header {
    transition: ease-in-out 0.3s;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 997;
    overflow-y: auto;
}
#header.header-top {
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: #000000a6;
    display: block;
}
#header .container {
  text-align: start;
}
#header.header-top .container {
    text-align: center;
}
#header h1, #header h1:hover {
    color: #fff;
    line-height: 1;
    display: inline-block;
}
#header h2 {
    font-size: 24px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.8);
}
#header h2 span {
    color: #fff;
    border-bottom: 2px solid #18d26e;
    padding-bottom: 6px;
}

</style>
