import Client from "./base.js"
const api='/student'

export default {
  getCourses(uid){
    return Client.get(api+'/courses',{
      params: {
        uid
      }
    })
  },
  
  getSigning(uid){
    return Client.get(api+'/sign-all',{
      params: {
        uid
      }
    })
  },
  
  getSigned(uid){
    return Client.get(api+'/sign-already',{
      params: {
        uid
      }
    })
  },
  
  toSignIn(uid, apid){
    return Client.post(api+'/tosign',{
      uid,
      apid
    })
  },
}