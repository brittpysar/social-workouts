<template>

    <div class="main-image">
        <div class="main-text">
          <h1>Welcome to Social Fitness</h1>
          <p>Find a trainer or friends</p>
          <router-link to="/SignUp" class="btn">Sign Up</router-link>

        </div>
      </div>
    
    <div class="main-intro">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis id officia omnis! Accusantium inventore voluptatem excepturi aut veniam saepe! Fugiat et id velit voluptates est rerum ipsa dolor amet, autem deserunt provident. Iusto officia est enim ex reprehenderit vel, omnis modi veritatis incidunt hic, cum officiis temporibus repellendus deserunt molestiae odio maiores accusamus laboriosam error, dolor dolore natus? Magni itaque qui magnam temporibus, expedita quo officiis beatae mollitia! Labore sunt impedit dolorum maiores beatae eligendi earum quas. Assumenda voluptate modi recusandae minus architecto quibusdam optio nisi eius voluptatibus animi facere velit veniam vel aliquid esse quaerat error, nesciunt qui porro!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis id officia omnis! Accusantium inventore voluptatem excepturi aut veniam saepe! Fugiat et id velit voluptates est rerum ipsa dolor amet, autem deserunt provident. Iusto officia est enim ex reprehenderit vel, omnis modi veritatis incidunt hic, cum officiis temporibus repellendus deserunt molestiae odio maiores accusamus laboriosam error, dolor dolore natus? Magni itaque qui magnam temporibus, expedita quo officiis beatae mollitia! Labore sunt impedit dolorum maiores beatae eligendi earum quas. Assumenda voluptate modi recusandae minus architecto quibusdam optio nisi eius voluptatibus animi facere velit veniam vel aliquid esse quaerat error, nesciunt qui porro!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis id officia omnis! Accusantium inventore voluptatem excepturi aut veniam saepe! Fugiat et id velit voluptates est rerum ipsa dolor amet, autem deserunt provident. Iusto officia est enim ex reprehenderit vel, omnis modi veritatis incidunt hic, cum officiis temporibus repellendus deserunt molestiae odio maiores accusamus laboriosam error, dolor dolore natus? Magni itaque qui magnam temporibus, expedita quo officiis beatae mollitia! Labore sunt impedit dolorum maiores beatae eligendi earum quas. Assumenda voluptate modi recusandae minus architecto quibusdam optio nisi eius voluptatibus animi facere velit veniam vel aliquid esse quaerat error, nesciunt qui porro!</p>
    </div>
    
</template>

<script>
export default {
  name: 'Home',
  components: {
  data() {
    return{
    }
  }
}
}
</script>


<style scoped>

.main-image {
  background-image:
  linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("../assets/mainphoto.jpeg");
  height: 50%;
  background-position: center;
  background-size: cover;
  margin-top: 52px;
  padding: 100px;
}

.main-text{
  color: white;
  text-align: center;
}

.btn {
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 12px;
  text-decoration: none;

}

.btn:hover{
  background-color: #a50404;
  color: white;
}

.main-intro {
  background-color: white;
  color: black;
  font-size: 17px;
  font-family: Avenir, Helvetica, sans-serif;
  padding: 1px;
}

h1, h2 {
  font-family:"Segoe UI",Arial,sans-serif;
  font-size:36px;
  font-weight:400;
  margin:10px 0;

}

h2 {
  background-color: white;
  color: black;
}

</style>