<template>
  
   <div>
    <el-table :data="emps" style="width: 50%">
      <el-table-column prop="id" label="主键" width="180"> </el-table-column>
      <el-table-column prop="ename" label="名称" width="180"> </el-table-column>
      <el-table-column prop="bdate" label="日期"> </el-table-column>
       <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="did" label="部门"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">

          <el-button @click="deleteEmp(scope.row)" 
          type="text" size="small">删除</el-button>
          <el-button type="text" @click="updateEmp(scope.row)" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>






  </div>
</template>


<script>
import emp from '../model/model.js'
const em=new emp()
export default {
    data(){
        return{
            emps:[]
        }
       
    },
    methods: {
        getEmpData() {
      em.getEmps().then((response) => {
        this.emps = response.data;
      });
    },
    deleteEmp(row){
         em.deleteEmp(row.id).then((response)=>{
             this.getEmpData()
         })
    }
    },

    created(){

    }

}
</script>
