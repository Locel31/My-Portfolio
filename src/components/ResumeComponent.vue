<template>
  <div class="resume text-start">
    <div data-aos="fade-up"
     data-aos-duration="1000" >
      <div class="section-title">
        <h2>RESUME</h2>
        <p>CHECK MY RESUME</p>
      </div>
      <div class="row">
       <div class="col-lg-6 px-4 " >

          <!-- <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0" v-for="sumary in sumaries" :key="sumary.id">
            <h4>{{ sumary.title }}</h4>
            <p><em>{{ sumary.description }}</em></p>
            <p>
            </p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
            <p></p>
          </div> -->

          <h3 class="resume-title">Education</h3>
          <div v-for="education in educations" :key="education.id">
            <div class="resume-item">
              <h4>{{education.title}}</h4>
              <h5>{{education.year}}</h5>
              <p><em>{{education.school}}</em></p>
              <p>{{education.description}}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 px-4">
          <h3 class="resume-title">Professional Experience</h3>
           <div v-for="prof in professionalExperiences" :key="prof.id">
            <div class="resume-item">
              <h4>{{prof.title}}</h4>
              <h5>{{prof.year}}</h5>
              <p><em>{{prof.company}}</em></p>
              <p>{{prof.description}}</p>
            </div>
          </div>
          <!-- <div class="resume-item">
            <h4>Senior graphic design specialist</h4>
            <h5>2019 - Present</h5>
            <p><em>Experion, New York, NY </em></p>
            <p>
            </p><ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            <p></p>
          </div> -->
          
        </div>
      </div>
     <!-- professional-experience -->
  </div>
  </div>
</template>

<script>
import { db, addDoc, collection, onSnapshot, orderBy, getDocs } from '@/firebase.js';

export default {
    name: 'ResumeComponent',  
    props: {
      firstName: String,
      lastName: String,
      title: String,
      msg: String,
    },
     data(){
        return {
            sumaries: [],
            educations: [],
            professionalExperiences: []
        }
    },
    mounted() {
      this.fetchSumaryData();
      this.fetchEducationData();
      this.fetchProfessionalExperiencesnData();
    },
    methods: {
      async fetchSumaryData() {
        try {
          const q = collection(db, 'sumary'); 
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              const sumartData = {
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
              };
              this.sumaries.push(sumartData);
          });
          this.sumaries.sort((a, b) => b.id - a.id);
        }catch (e) {
console.error('Error fetching user data:', e);
        }
      },
      async fetchEducationData() {
        try {
          const q = collection(db, 'education'); 
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              const educationData = {
                id: doc.id,
                title: doc.data().title,
                school: doc.data().school,
                year: doc.data().year,
                description: doc.data().description,
              };
              this.educations.push(educationData);
          });
          this.educations.sort((a, b) => a.date - b.date);
        }catch (e) {
console.error('Error fetching user data:', e);
        }
      }, 
      async fetchProfessionalExperiencesnData() {
        try {
          const q = collection(db, 'professional-experience'); 
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              const professionalData = {
                id: doc.id,
                title: doc.data().title,
                company: doc.data().company,
                year: doc.data().year,
                description: doc.data().description,
              };
              this.professionalExperiences.push(professionalData);
          });
          this.professionalExperiences.sort((a, b) => b.id - a.id);
        }catch (e) {
console.error('Error fetching user data:', e);
        }
      }
    }
}
</script>

<style>
.resume p,.resume h5 {
   color: #fff;
}
.resume .resume-title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #fff;
}
.resume .resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    position: relative;
}.resume .resume-item::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: #18d26e;
    border: 2px solid #18d26e;
}.resume .resume-item h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #18d26e;
    margin-bottom: 10px;
}.resume .resume-item h5 {
    font-size: 16px;
    background: rgba(255, 255, 255, 0.15);
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
}.resume .resume-item ul {
    padding-left: 20px;
}.resume .resume-item ul li {
    padding-bottom: 10px;
     color: #fff;
}
</style>