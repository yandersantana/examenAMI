const User =require('../models/usuario')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const SECRET_KEY ='secretkey94'


const authCrtl={};

authCrtl.createUser = async (req,res,next)=>{
    const newUser={
        //user:req.body.user,
        email:req.body.email,
        //password:req.body.password
        password: bcrypt.hashSync(req.body.password)
    }
    authCrtl.create(newUser,(err,user)=>{
      //  if(err & err.code ===11000) return res.status(409).send('el email ya existe')
      //if(err & err.code ===11000) return res.status(409).send('el email ya existe')
        if(err)return res.status(500).send('server error');
        const expiresIn = 24*60*60;
        const accesToken = jwt.sign({id:user.id},
            SECRET_KEY,{
                expiresIn:expiresIn
            });
            const dataUser={
                email:user.email,
                accesToken:accesToken,
                expiresIn:expiresIn
            }

         //response
         //res.send({user});
         
         res.send({dataUser});

    })
    await newUser.save();
         res.json({status:'Usuario Registrado'})
}

authCrtl.loginUser = async(req,res,next)=>{
    const userData ={
        email: req.body.email,
        password:req.body.password
    }
await Usuario.findOne({user:userData.user},(err,user)=>{
    if(err)return res.status(500).send('error en servidor');
    if (!user){
        //email does not exist
        res.status(409).send({message:'somthing is worng'});

    }else {
        const resultPassword = bcrypt.compareSync(userData.password,user.password);
        if(resultPassword){
            const expiresIn=24*60*60;
            const accesToken = jwt.sign({id:user.id},SECRET_KEY,{
                expiresIn:expiresIn
            }); 

            const dataUser={
                email:user.email,
                accesToken:accesToken,
                expiresIn:expiresIn
            }
            
            res.send({dataUser})
            res.json({status: 'Bienvenido Usuario'});
        } else{
            //paswword wrong
            res.status(409).send({message:"error de password"});
        }
    }

}
)
}

module.exports= authCrtl;