import Client from "./base.js"
const api='/student'

export default {
  getCourses(uid){
    return Client.get(api+'/courses',{
      params: {
        uid
      }
    })
  }
}