<template>
    <!--Sign Up-->
    <form @submit.prevent="handleSubmit">
          
        <div class="container">

        <label for="fname"><b>First Name</b></label>
        <input type="firstname" placeholder="Enter First Name" name="fname" required v-model="fname">

        <label for="uname"><b>Last Name</b></label>
        <input type="lastname" placeholder="Enter Last Name" name="lname" required v-model="lname">

        <label for="gender"><b> Gender: </b></label>
        <select required v-model="gender">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Non-Binary/Other">Non-Binary/Other</option>
        </select>

        <label for="uname"><b>E-mail</b></label>
        <input type="email" placeholder="Enter E-mail" name="email" required v-model="email">

        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required v-model="uname">
          
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required v-model="password">
        <div v-if="passwordError" class="error"> {{ passwordError }}</div>

        <label for="psw2"><b>Confirm Password</b></label>
        <input type="password" placeholder="Confirm Password" name="psw2" required>

        <div>
            <input type="checkbox" name="check" v-model="isTrainer">
            <label><b>Trainer Account</b></label>
        </div>

        <button type="submit">Create Account</button>
              
        </div>
          
        <div class="container2" style="background-color:#f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'SignUp',
        data() {
        return{
                fname:  '',
                lname:  '',
                uname:  '',
                email: '',
                password: '',
                gender: '',
                isTrainer: false,
                passwordError: ''
    }
  }, methods: {
            handleSubmit(){
                console.log('form submitted')
                //handle password
                this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long'
        }
    }
}
</script>

<style scoped>
    
    /* Full-width inputs */
    input[type=text], input[type=password], input[type=password], input[type=firstname], input[type=lastname], input[type=email], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        border-radius: 8px;

    }

    /* Set a style for all buttons */
    button {
        background-color: #a50404;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: 0;
        cursor: pointer;
        width: 100%;
        border-radius: 8px;

    }

    /* Add a hover effect for buttons */
    button:hover {
        background-color: white;
        color: black;
    }

    /* Extra style for the cancel button (red) */
    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #a50404;
    }


    /* Add padding to containers */
    .container {
        padding: 16px;
        background-color: white;
        margin-top: 52px;
    }

    .container2 {
        padding: 16px;
    }


    .error {
        color:#a50404;
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 0.8em;
        font-weight: bold;
    }

</style>