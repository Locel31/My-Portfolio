<template>
  <div class="about-me text-start mb-5">
    <div data-aos="fade-up"
     data-aos-duration="1000" >
      <div class="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>
      <div class="row">
        <div class="col-lg-4 " data-aos="fade-right">
            <img src="@/assets/img/me.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content  text-white">
          <h3>UI/UX &amp; Graphic Designer &amp; Website Developer</h3>
          <p class="fst-italic">
            {{description}}
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{{bday}}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{{phone}}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>{{city}}</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{{age}}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{{degree}}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>{{email}}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p>
            {{objective}}
          </p>
        </div>
      </div>
         <div>
      <div class="row">
        <div class="col-12">
          <h2 class="fw-bold" style="color:#35e788">My Project</h2>
        </div>
        <div class="col-12 ">
          <a href="/my-project/todo-application">
            <div class="card">
             <img src="@/assets/img/todo.JPG.jpg" class="img-fluid" alt="">
              <span class="py-2 px-4"> Todo Application</span>
            </div>
            </a>
        </div>
        <div class="col-12 mt-4">
          <a href="/my-project/quiz">
            <div class="card">
             <img src="@/assets/img/FEAD1660-CC3D-4B8B-9DC4-815F0F3901B0.jpeg" class="img-fluid" alt="">
              <span class="py-2 px-4">Quiz Test</span>
            </div>
            </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  props: {
    bday: String,
    website: String,
    phone: String,
    city: String,
    age: Number,
    degree: String,
    email: String,
    description: String,
    objective: String,
    msg: String
  }
}
</script>

<style>
.section-title h2 {
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    line-height: 1px;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #aaaaaa;
    font-family: "Poppins", sans-serif;
}
.section-title h2::after {
    content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #4ceb95;
    margin: 4px 10px;
}.section-title p {
    margin: 0;
    margin: -15px 0 15px 0;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #fff;
}
.about-me .content h3 {
    font-weight: 700;
    font-size: 26px;
    color: #18d26e;
}
.about-me .content ul {
    list-style: none;
    padding: 0;
}
.about-me .content ul li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}.about-me .content ul i {
    font-size: 16px;
    margin-right: 5px;
    color: #18d26e;
    line-height: 0;
}
</style>
