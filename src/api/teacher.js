import Client from "./base.js"
const api='/teacher'

export default {
  getBigs(uid){
    return Client.get(api+'/big',{
      params: {
        uid
      }
    })
  },
  
  getSmall(id){
    return Client.get(api+'/small',{
      params: {
        id
      }
    })
  },
  
  getCanBig(uid){
    return Client.get(api+'/can-big',{
      params: {
        uid
      }
    })
  },
  
  getClass(cid){
    return Client.get(api+'/can-big-class',{
      params: {
        cid
      }
    })
  },
  
  alertBig(id, number){
    return Client.put(api+'/to-big',{
      id,
      number
    })
  },
  
  getApplys(uid){
    return Client.get(api+'/application',{
      params: {
        uid
      }
    })
  },

 
  getBigCanApply(id){
    return Client.get(api+'/big-can',{
      params: {
        id
      }
    })
  },
  
  submitApply(id, lab, time){
    return Client.post(api+'/add-application',{
      id, 
      lab, 
      time
    })
  },
}