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
            <div class="col-10 border">
                <div class="container mt-5">
                    <div class="card py-5">
                        <h2>Weclome to my Personal Website Portfolio</h2>
                         <h1 class="fw-bold text-success">LOCEL F. DEGAMO</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-link {
  color: #fff;
}
</style>