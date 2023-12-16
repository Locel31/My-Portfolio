<template>
    <div class="resume text-start">
    <div data-aos="fade-up"
     data-aos-duration="1000" >
      <div class="section-title">
        <h2>TO DO APPLICATION</h2>
        <p>CHECK MY TO DO APPLICATION</p>
      </div>
        <div class="row">
         <div class="col-lg-12 px-4 " >
            <div class="card">
                <div class="p-3">
                    <form class="px-4">
                        <div class="row mx-0">
                            <input type="text" ref="task" class="form-control" placeholder="Task" />
                        </div>
                        <div class="my-2">
                            <button  @click="addNewData" class="btn btn-success" type="button">ADD</button>
                        </div>
                    </form>
                </div>
                <div class="p-3" v-for="dataitem in data" :key="dataitem.id">
                    <div class=" d-flex px-4 align-items-center py-2" style="border-bottom: 1px solid green">
                        <div class="col-8">
                            <h4 class="fw-bold">{{ dataitem.task }} </h4>
                        </div>
                        <div class="col-4 text-center" > 
                            <button class="btn btn-warning" @click="deleteEduc(dataitem.id)">delete</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
     <!-- professional-experience -->
  </div>
  </div>
</template>

<script>
import { db, addDoc, collection, setDoc, doc, onSnapshot, orderBy, getDocs, deleteDoc , Timestamp} from '@/firebase.js';

export default {
    name: 'TodoApplicationComponent',  
     data(){
        return {
            data: [],
        }
    },
     mounted() {
      this.fetchData();
    },
    methods: {
        async addNewData() {
            try {
                 const task = this.$refs.task.value.trim();
                  const newDocRef = await addDoc(collection(db, 'todo'), {
                    task: task,
                    status: 0,
                    date: Timestamp,
                 });
                  console.log('Document added with ID:', newDocRef.id);
                 this.$refs.task.value = '';
                 window.alert('Todo Application saved successfully!');
                 this.fetchData();
            } catch(e) {
                console.log(e)
            }
        },
        async fetchData() {
            try {
                this.data = [];
            const q = collection(db, 'todo'); 
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
               const dateTimestamp = doc.data().date;

                const educationData = {
                    id: doc.id,
                    task: doc.data().task,
                    status: doc.data().status,
                    date: dateTimestamp
                };
                this.data.push(educationData);
                
            });
            this.data.sort((a, b) => a.date - b.date);
            }catch (e) {
                console.error('Error fetching user data:', e);
            }
      }, 
      deleteEduc: async (id) => {
         try {
                await deleteDoc(doc(db, 'todo', id));
                window.alert('Todo Application delete successfully!');
                 window.location.reload();
           } catch(e) {
             console.log(e)
           }
           
      }
    }
    
}
</script>

<style>

</style>