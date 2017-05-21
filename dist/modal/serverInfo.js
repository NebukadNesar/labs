"use strict";

/**
* @auther:burhanc
* server data object model
**/
module.exports = function () {
  return {
    serverList: [],
    server: function server(ss) {
      if (ss != undefined || ss != null) {
        return {
          serverName: ss.serverName,
          serverLocation: ss.serverLocation,
          serverIp: ss.serverIp,
          serialNumber: ss.serialNumber,
          relatedGroup: ss.relatedGroup,
          relatedProject: ss.relatedProject,
          serverEndDate: ss.serverEndDate,
          serverAdmin: ss.serverAdmin,
          serverPasswd: ss.serverPasswd
        };
      } else {
        return {
          serverName: "",
          serverLocation: "",
          serverIp: "",
          serialNumber: "",
          relatedGroup: "",
          relatedProject: "",
          serverEndDate: "",
          serverAdmin: "",
          serverPasswd: ""
        };
      }
    }
  };
};
//# sourceMappingURL=serverInfo.js.map