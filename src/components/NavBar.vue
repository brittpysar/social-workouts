<template>
    <!--Nav Bar-->
    <div class="topnav">
        <a class="active" href="/SignUp">Sign Up</a>
        <router-link to="/MyAccount">My Account</router-link>
        <router-link to="/Friends">Friends</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/Login">Login</router-link>
        <router-link to="/TrainerAccount">Trainers</router-link>
        <router-link to="/BrowsePlans">Buy Plan</router-link>


        <router-view></router-view>
      </div>
</template>

<style scoped> 
/* Add a black background color to the top navigation */
    .topnav {
        background-color: #333;
        overflow: hidden;
        position: absolute;
        top: 0px;
        width: 100%;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
        float: right;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        border-radius: 8px;

    }

    /* Change the color of links on hover */
    .topnav a:hover {
        background-color: #ddd;
        color: black;
    }

    /* Add a color to the active/current link */
    .topnav a.active {
        float: left;
        background-color: #a50404;
        color: white;
    }

    .topnav a.active:hover {
        background-color: #ddd;
        color: black;
    }

    .topnav a.router-link-exact-active {
        background-color: #a50404;
        color: white;
    }
</style>