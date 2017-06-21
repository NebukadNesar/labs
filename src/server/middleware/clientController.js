/**
*@auther:burhanc
*/
import path from 'path'

var clientController = {}

clientController.serveClient = (req, res) => {
      console.log(__dirname);
      res.sendFile(path.join(__dirname + '/../../public/views/index.html'));
}

//public
export default clientController
