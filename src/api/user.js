import Client from "./base.js"

export default {
  login(acc, pass){
    return Client.post('login',{
      a: acc,
      p: pass,
    })
  }
}