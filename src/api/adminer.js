import Client from "./base.js"
const api='/lab'

export default {
  getLabs(uid){
    return Client.get(api+'/my-labs',{
      params: {
        uid
      }
    })
  },
  
  getSupC(lname){
    return Client.get(api+'/lab-sup',{
      params: {
        lname
      }
    })
  },
  
  getNSupC(lname){
    return Client.get(api+'/lab-nsup',{
      params: {
        lname
      }
    })
  },
  
  changeLabNum(lab, number){
    return Client.put(api+'/upd-lab-number',{
      params: {
        lab,
        number
      }
    })
  },
  
  delSC(lab, eid){
    return Client.delete(api+'/del-lab-course',{
      params: {
        lab,
        eid
      }
    })
  },
  
  addSC(lab, eid){
    return Client.post(api+'/add-lab-course',{
      lab,
      eid
    })
  },
  
  getApply(uid){
    return Client.get(api+'/application',{
      params: {
        uid
      }
    })
  },
  
  agree(apid){
    return Client.put(api+'/agree-application',{
      params: {
        apid
      }
    })
  },
  
  disagree(apid, comment){
    return Client.put(api+'/disagree-application',{
      params: {
        apid,
        comment
      }
    })
  },
}