module.exports = ()=>{
  return {
    serverList:[],
    server: (ss)=>{
      if(ss != undefined || ss != null){
        return {
            serverName: ss.serverName,
            serverIp:   ss.serverIp,
            serverPle:  ss.serverPle,
            serverAcqTime: ss.serverAcqTime,
            serverRelTime: ss.serverRelTime,
            serverOwnName: ss.serverOwnNames,
            serverOwnTeam: ss.serverOwnTeam,
            serverAdmin:   ss.serverAdmin,
            serverPasswd:  ss.serverPasswd
        }
      }
      else{
        return {
          serverName: "",
          serverIp:   "",
          serverPle:  "",
          serverAcqTime: "",
          serverRelTime: "",
          serverOwnName: "",
          serverOwnTeam: "",
          serverAdmin:   "",
          serverPasswd:  ""
        }
      }
    }
  }
}
