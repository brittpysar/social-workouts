<template>


     <div class ="parent">

        <div class="card">
            <img src="../assets/profile.jpeg" alt="My Name" style="width:75%">
            <h1>Trainer Profile</h1>
            <p class="title">Social Fitness Trainer</p>
            <p>Credentials</p>
            <router-link to="/EditProfile" class="mnbutton">Edit Profile</router-link>

        </div>


        <div class="prof">
            <h3>Create a Workout Plan</h3>
            <router-link to="/CreatePlan" class="crtplan">Create Plan</router-link>
            <h3>Edit Existing Plan</h3>
            <router-link to="/EditPlan" class="edit">Edit</router-link>
            <h3>Sold Plans</h3>
            <router-link to="/Sales" class="sales">Sales</router-link>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'TrainerAccount',
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

button{
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

    .mnbutton, .crtplan, .sales, .edit {
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

    .crtplan:hover, a:hover {
        background-color: #333;
        color: white;
    }

    .sales:hover, a:hover {
        background-color: #333;
        color: white;
    }

    .edit:hover, a:hover {
        background-color: #333;
        color: white;
    }


    .prof {
        flex: 1;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 600px;
        max-height: 400px;
        text-align: center;
        border-radius: 15px;
        margin-left: 200px;
        margin-top: 125px;
        background-color: #333;
        color: white;
    }


</style>