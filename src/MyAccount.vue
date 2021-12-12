<template>


     <div class ="parent">

        <div class="card">
            <img src="../assets/profile.jpeg" alt="My Name" style="width:75%">
            <h1>User Profile</h1>
            <p class="title">Social Fitness Member</p>
            <p>Running, Weight Lifting</p>
            <router-link to="/EditProfile" class="mnbutton">Edit Profile</router-link>

        </div>


        <div class="prof">
            <h3>Record a Workout</h3>
            <router-link to="/RecordWorkout" class="addworkout">Record Workout</router-link>
            <h3>View Past Workouts</h3>
            <router-link to="/PastWorkouts" class="pstwrkt">View Past Workouts</router-link>
            <h3>View Purchased Workout Plans</h3>
            <router-link to="/MyPlans" class="wrkplns">View My Plans</router-link>
            <h3>Update Preferences</h3>
            <router-link to="/UpdatePreferences" class="updt">Update Preferences</router-link>

        </div>
    </div>

</template>

<script>

    export default {
        name: 'MyAccount',
        data (){
            return {
                showEdit: false

            }
        }, 
        methods: {
            toggleEdit(){
                this.showEdit = !this.showEdit
            }
        }
    }
</script>

<style scoped>
h1{
    font-size: 50px;
    padding-top: 50px;
}

p{
    padding-top: -10px;
}

.parent{
    display: flex;
    background-color: white;
    margin: 52px;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0;
    padding-bottom: 20px;
}

.card{
    box-shadow: 0 4px 8px rgba(0, 0,0 ,0.2);
    border-radius: 15px;
    max-width: 300px;
    margin: left;
    margin-left: 20px;
    text-align: center;
    margin-top: 52px;
    background-color: white;
    padding: 10px;
}

.title{
    color: grey;
    font-size: 18px;
}


a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}

.mnbutton:hover, a:hover {
        background-color: white;
        color: black;
    }

    .mnbutton, .addworkout, .pstwrkt, .wrkplns, .updt {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #a50404;
        text-align: center;
        cursor: pointer;
        width: 75%;
        font-size: 18px;
        border-radius: 8px;
    }

    .addworkout:hover, a:hover {
        background-color: #333;
        color: white;
    }

    .pstwrkt:hover, a:hover {
        background-color: #333;
        color: white;
    }

    .wrkpplans:hover, a:hover {
        background-color: #333;
        color: white;
    }

    .updt:hover, a:hover {
        background-color: #333;
        color: white;
    }

    .prof {
        flex: 1;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 600px;
        text-align: center;
        border-radius: 15px;
        margin-left: 200px;
        margin-top: 50px;
        background-color: #333;
        color: white;
    }


</style>