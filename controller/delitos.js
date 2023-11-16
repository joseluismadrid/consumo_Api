const {response}=require('express')

const delitos = require('../models/delitos')

const getDelito= async(req,res)=>{
  const  delito = await delitos.find();//Obtener todos los documentos de una coleccion
    res.json({
        msg: delito
    })
};

const postDelito = async(req,res)=>{
    const datos= req.query //capturar datos de la postman
    let mensaje='Inserción exitosa'
    try {
        const delito = new delitos(datos)
        await delito.save() //guarda en la base de datos
        console.log(delito)
    } catch (error) {
        mensaje=error
        console.log(mensaje)
    }
    res.json({
        "msg": mensaje
    })
}
const putDelito = async (req, res) => {
    const {tipoHurto,direccion,fecha,ciudad,decripcion}= req.query //desetructurar 
    let mensaje = 'Actualizacion Exitosa'
    try {
        
        const  delito = await delitos.findOneAndUpdate({tipoHurto:tipoHurto},{direccion:direccion,fecha:fecha,ciudad:ciudad,decripcion:decripcion})  
        console.log(delito)
    } catch (error) {
        mensaje = error;
    }
    res.json({
       " msg": mensaje
    })
    
}
const deleteDelito = async (req, res) => {
    const {tipoHurto}= req.query //desetructurar 
    let mensaje = 'Eliminacion Exitosa'
    try {
        const   delito = await delitos.findOneAndDelete({tipoHurto:tipoHurto}) 
        console.log(delito)
    } catch (error) {
        mensaje = error;
    }
    res.json({
        "msg":mensaje
    })
    
}
module.exports={
    getDelito,
    postDelito,
    putDelito,
    deleteDelito

}