const clarifai = require('clarifai');
const app = new Clarifai.App({
 apiKey: 'e02c922492be41d0a6be2853d834449f'
});

const handleApiCall=(req,res)=>{app.models
      .predict(
       Clarifai.FACE_DETECT_MODEL,
        req.body.input)
      .then(data=>{
      	res.json(data);
      })
      .catch(err=> res.status(400).json('unable to call api'))
  }

const handleImageCount=(req,res,db)=>{
   const {id} = req.body;
    db('users').where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => {
    	res.json(entries[0])
    })
    .catch(err=>res.status(400).json('unable to get users'));

}

module.exports={
	handleImageCount,
	handleApiCall
};