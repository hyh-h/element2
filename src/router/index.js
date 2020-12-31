import Vue from 'vue'
import  vuerouter from 'vue-router'
import Emp from '../components/Emp.vue'
 
Vue.use(vuerouter)

const routes=[
    {path:"/emp",components:Emp}
]
export default new vuerouter({
    routes
})