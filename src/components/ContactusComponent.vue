<template>
  <div id="contact" class="contact text-start">
    <div data-aos="fade-up"
     data-aos-duration="1000" >
        <div class="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
        </div>
        <div class="row mt-2">

            <div class="col-md-6 d-flex align-items-stretch">
            <div class="info-box">
                <i class="bx bx-map"></i>
                <h3>My Address</h3>
                <p>{{city}}</p>
            </div>
            </div>

            <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div class="info-box">
                <i class="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div class="social-links">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
            </div>

            <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
                <i class="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>{{email}}</p>
            </div>
            </div>
            <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
                <i class="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p>{{phone}}</p>
            </div>
            </div>
        </div>

        <form role="form" class="php-email-form mt-4">
            <div class="row">
            <div class="col-md-6 form-group">
                <input type="text" ref="name"  class="form-control" id="name" placeholder="Your Name" required="" fdprocessedid="nnfwzv">
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" ref="email"  class="form-control" id="email" placeholder="Your Email" required="" fdprocessedid="yu1b67">
            </div>
            </div>
            <div class="form-group mt-3">
            <input type="text" ref="subject"  class="form-control" id="subject" placeholder="Subject" required="" fdprocessedid="1dlgxp">
            </div>
            <div class="form-group mt-3">
            <textarea class="form-control" ref="message"  rows="5" placeholder="Message" required=""></textarea>
            </div>
            <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button @click="submitMesage" type="button" fdprocessedid="hx8lu">Send Message</button></div>
        </form>
    </div>
  </div>
</template>

<script>
import { db, addDoc, collection, setDoc, doc, onSnapshot, orderBy, getDocs } from '@/firebase.js';


export default {
   name: 'ContactusComponent',
    props: {
        phone: String,
        city: String,
        email: String
        
    },
   data(){
        return {
            contactus: [],
        }
    },
    methods: {
        async submitMesage() {
             try {
                 const name = this.$refs.name.value.trim();
                 const email = this.$refs.email.value.trim();
                 const subject = this.$refs.subject.value.trim();
                 const message = this.$refs.message.value.trim();

                  const newDocRef = await addDoc(collection(db, 'contactus'), {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    date: Date.now(),
                 });
                  console.log('Document added with ID:', newDocRef.id);
                 this.$refs.name.value = '';
                 this.$refs.email.value = '';
                 this.$refs.subject.value = '';
                 this.$refs.message.value = '';
                 window.alert('Contact us message saved successfully!');
            } catch(e) {
                console.log(e,'eres')
            }
        }
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
.contact .info-box {
    color: #444444;
    padding: 20px;
    width: 100%;
    background: rgba(255, 255, 255, 0.08);
}.contact .info-box i.bx {
    font-size: 24px;
    color: #18d26e;
    border-radius: 50%;
    padding: 14px;
    float: left;
    background: rgba(255, 255, 255, 0.1);
}.contact .info-box h3 {
    font-size: 32px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 700;
    margin: 10px 0 8px 68px;
}
.contact .info-box p {
    padding: 0;
    color: #fff;
    line-height: 24px;
    font-size: 14px;
    margin: 0 0 0 68px;
}.contact .info-box .social-links {
    margin: 5px 0 0 68px;
    display: flex;
}.contact .info-box .social-links a {
    font-size: 18px;
    display: inline-block;
    color: #fff;
    line-height: 1;
    margin-right: 12px;
    transition: 0.3s;
}.contact .php-email-form {
    padding: 30px;
    background: rgba(255, 255, 255, 0.08);
}.contact .php-email-form input {
    padding: 10px 15px;
}.contact .php-email-form input, .contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.08);
    border: 0;
    transition: 0.3s;
    color: #fff;
}.contact .php-email-form .loading {
    display: none;
    background: rgba(255, 255, 255, 0.08);
    text-align: center;
    padding: 15px;
}.contact .php-email-form .error-message {
    display: none;
    background: rgba(255, 255, 255, 0.08);
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
}.contact .php-email-form .sent-message {
    display: none;
    background: rgba(255, 255, 255, 0.08);
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
}.contact .php-email-form button[type=button] {
    background: #18d26e;
    border: 0;
    padding: 10px 30px;
    color: #fff;
    transition: 0.4s;
    border-radius: 4px;
}.contact .php-email-form input::placeholder, .contact .php-email-form textarea::placeholder{
 color: #fff;
}
</style>