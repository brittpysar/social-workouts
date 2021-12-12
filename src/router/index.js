import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Friends from '../views/Friends.vue'
import MyAccount from '../views/MyAccount.vue'
import Login from '../views/Login.vue'
import EditProfile from '../views/EditProfile.vue'
import RecordWorkout from '../views/RecordWorkout.vue'
import PastWorkouts from'../views/PastWorkouts.vue'
import MyPlans from '../views/MyPlans.vue'
import TrainerAccount from '../views/TrainerAccount.vue'
import CreatePlan from '../views/CreatePlan.vue'
import EditPlan from '../views/EditPlan.vue'
import Sales from '../views/Sales.vue'
import BrowsePlans from '../views/BrowsePlans.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    }, 
    {
        path: '/Friends',
        name: 'Friends',
        component: Friends
    },
    {
        path: '/MyAccount',
        name: 'MyAccount',
        component: MyAccount
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/EditProfile',
        name: 'EditProfile',
        component: EditProfile
    },
    {
        path: '/RecordWorkout',
        name: 'RecordWorkout',
        component: RecordWorkout
    },
    {
        path: '/PastWorkouts',
        name: 'PastWorkouts',
        component: PastWorkouts
    },
    {
        path: '/MyPlans',
        name: 'MyPlans',
        component: MyPlans
    },
    {
        path: '/TrainerAccount',
        name: 'TrainerAccount',
        component: TrainerAccount
    },
    {
        path: '/CreatePlan',
        name: 'CreatePlan',
        component: CreatePlan
    },
    {
        path: '/EditPlan',
        name: 'EditPlan',
        component: EditPlan
    },
    {
        path: '/Sales',
        name: 'Sales',
        component: Sales
    },
    {
        path: '/BrowsePlans',
        name: 'BrosePlans',
        component: BrowsePlans
    }

]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
})

export default router