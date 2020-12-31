import axios from 'axios'

export default class emp{
      // 获取员⼯数据
      getEmpData() {
        return axios.get(`http://localhost/emps`);
    }

    //依据员⼯id删除员⼯
    deleteEmp(id) {
        return axios.delete(`http://localhost/emps/${id}`);
    }
    //根据id获取员工数据
    listbyid(id) {
        return axios.get(`http://localhost/emps/${id}`);
    }

    //修改员工数据
    update(emp) {
        return axios.put(`http://localhost/emps/${emp}`)
    }
}