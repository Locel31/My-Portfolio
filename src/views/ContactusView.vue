<template>
    <div class="border bg-dark" style="height: 100vh">
        <div class="row align-items-stretch" style="height: 100vh">
            <div class="col-2 border">
                  <nav class="nav flex-column">
                    <!-- <router-link to="/">Home</router-link> | -->
                     <router-link class="nav-link"  :to="{name: 'Admin'}">Admin</router-link> 
                    <router-link class="nav-link"   :to="{name: 'Education'}">Education</router-link>
                    <router-link class="nav-link"   :to="{name: 'ProfessionalExperience'}">Professional Experience</router-link>
                    <router-link class="nav-link"   :to="{name: 'Contactus'}">Contactus</router-link>
                </nav>
            </div>
            <div class="col-10 border bg-dark p-3">
                <div class="container-fluid">
                    <div class="card p-5 my-5">
                        <h2 class="fw-bold">Contact Us List</h2>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="education in contactuslist" :key="education.id">
                            <td>{{ education.name }}</td>
                            <td>{{ education.email }}</td>
                            <td>{{ education.subject }}</td>
                            <td>{{ education.message }}</td>
                            <td>
                               <div class="d-flex gap-2 align-items-center justify-content-center">
                                
                                    <div>
                                        <button class="btn btn-warning"  @click="deleteEduc(education.id)"> delete </button>
                                    </div>
                               </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</template>

<script>
import { db, addDoc, collection, setDoc, doc, onSnapshot, orderBy, getDocs,deleteDoc } from '@/firebase.js';

export default { 
    data(){
        return {
            contactuslist: [],
        }
    },
     mounted() {
      this.fetchEducationData();
    },
      methods: {
         deleteEduc: async (id) => {
            try {
                    await deleteDoc(doc(db, 'contactus', id));
                    window.alert('contactus delete successfully!');
                    window.location.reload();
            } catch(e) {
                console.log(e)
            }
            
        },
        async fetchEducationData() {
        try {
          const q = collection(db, 'contactus'); 
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              const educationData = {
                id: doc.id,
                name: doc.data().name,
                email: doc.data().email,
                subject: doc.data().subject,
                message: doc.data().message,
                
              };
              this.contactuslist.push(educationData);
          });
          this.contactuslist.sort((a, b) => b.id - a.id);
        }catch (e) {
            console.error('Error fetching user data:', e);
        }
      }, 
      
    }
}
</script>

<style>

</style>