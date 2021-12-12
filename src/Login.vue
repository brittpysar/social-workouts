<template>
    <form action="action_page.php" method="post">
          
            <div class="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required>
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required>
          
              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
              </label>
            </div>
          
            <div class="container2">
              <button type="button" class="cancelbtn">Cancel</button>
              <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
</template>

<style scoped>

    /* Full-width inputs */
    input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    }

    /* Set a style for all buttons */
    button {
        background-color: #a50404;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
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
        padding: 50px;
        background-color: #f1f1f1;
        position: relative;
    }

    /* The "Forgot password" text */
    span.psw {
        float: right;
    }

    .cancelbtn {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
  }
</style>