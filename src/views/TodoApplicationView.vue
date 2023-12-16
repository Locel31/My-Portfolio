<template>
    <div class="resume text-start mt-5">
    <div data-aos="fade-up"
     data-aos-duration="1000" >
      <div class="section-title">
        <h2>MY PROJECT</h2>
        <p>CHECK MY TO DO APPLICATION</p>
      </div>
        <div class="row">
         <div class="col-lg-12 px-4 " >
            <div class="card">
                 
                <div class="p-3">
                    <form class="px-4">
                        <h3 class="fw-bold">TODO LIST</h3>
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
                            <h4 :class="{ 'fw-bold': dataitem.status === 1, 'text-decoration-line-through': dataitem.status === 1 }">{{ dataitem.task }} </h4>
                        </div>
                        <div class="col-4 text-center" > 
                            <div class="d-flex gap-2 flex-nowrap">
                                <div><button class="btn btn-danger" :disabled="dataitem.status === 1" @click="updateData(dataitem.id, dataitem.task)">done</button>
                                </div>
                                <div>
                                    <button class="btn btn-warning" @click="deleteEduc(dataitem.id)">delete</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                     
                </div>
                <div class="m-3">
                                <button class="btn btn-secondary" @click="clearData">Clear</button>

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
deleteEduc: async (id) => {
         try {
                await deleteDoc(doc(db, 'todo', id));
                window.alert('Todo Application deleted successfully!');
                window.location.reload();
                this.fetchData();
           } catch(e) {
             console.log(e)
           }
           
      },
      updateData: async (id, taskVal) => {
         try {
            
                await setDoc(doc(db, 'todo', id),{
                    task: taskVal,
                    status: 1
                });
                window.alert('Todo Application updated successfully!');
                window.location.reload();
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
      async clearData() {
        try {
                        this.data = []; // Clear the entire data list

                const q = collection(db, 'todo');
                const querySnapshot = await getDocs(q);
                
                querySnapshot.forEach(async (sdsa) => {
                    await deleteDoc(doc(db, 'todo', sdsa.id));
                });

                window.alert('Todo Application database cleared successfully!');
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
      
    }
    
}
</script>

<style>

</style>
