<template>
    <div class="border bg-dark" style="height: 100vh">
        <div class="row align-items-stretch" style="height: 100vh">
            <div class="col-2 border">
                  <nav class="nav flex-column">
                    <!-- <router-link to="/">Home</router-link> | -->
                     <router-link class="nav-link"  :to="{name: 'Admin'}">Admin</router-link> 
                    <router-link class="nav-link"   :to="{name: 'Education'}">Education</router-link>
                     <router-link class="nav-link"   :to="{name: 'ProfessionalExperienceEdit'}">Professional Experience</router-link>

                </nav>
            </div>
            <div class="col-10 border bg-dark p-3">
                <div class="container-fluid">
                    <div class="card shadow p-5 text-start"> 
                            <a href="/admin/professional-experience" class="mb-5">
                                <button class="btn btn-success" style="width: 100px" type="button" >Back</button>
                            </a>
                        
                            <h2 class="fw-bold">Educational Update Form</h2>
                         <form @submit.prevent="saveEducation">
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Title</label>
                            <input type="text" v-model="education.title" class="form-control form-control" id="title" placeholder="Title">
                        </div>
                         <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Company</label>
                            <input type="text" ref="school" v-model="education.company"  class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Company">
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Year</label>
                            <input type="text" v-model="education.year" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Year">
                        </div>
                       
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Description</label>
                            <textarea type="text" v-model="education.description" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Description"></textarea>
                        </div>
                          
                          <button class="btn btn-primary" type="submit" >Update</button>
                        </form>
                    </div>
                
                </div>
              
            </div>
        </div>
    </div>
</template>

<script>
import { db, setDoc, doc, getDoc } from '@/firebase.js';
import { ref, onMounted } from 'vue';
import {useRoute, useRouter} from "vue-router";


export default { 
    data(){
        return {
            
        }
    },
   
      methods: {
       
    },
    setup(){
        const education = ref({
            title: '',
            year: '',
            company: '',
            description: '',
        });
        const route = useRoute();
        const router = useRouter();
       
        onMounted( async () => {
            if(route.params.id){
                const docRef = doc(db, 'professional-experience', route.params.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    education.value = docSnap.data();
                }
            }
        });
        const saveEducation = async () => {
            try {
                if (route.params.id) {
                // Update existing document
                await setDoc(doc(db, 'professional-experience', route.params.id), education.value);
                } else {
                // Create a new document
                const newDocRef = doc(db, 'professional-experience');
                await setDoc(newDocRef, education.value);
                }

                console.log('professional experience saved update successfully!');
                 // Show alert
                window.alert('professional experience saved update successfully!');
                // Redirect to education list route
                   
            } catch (error) {
                console.error('Error saving professional experience:', error);
            } finally {
                 router.push('/admin/professional-experience');
            }
        };
        return {education, saveEducation };
    }
}
</script>

<style>

</style>