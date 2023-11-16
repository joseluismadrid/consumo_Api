const {Schema, model }=require('mongoose')

const DelitosSchema = ({
    tipoHurto:{
        type:String,
        required:[true,'El delito  es requerido'],
    },
    direccion:{
        type:String,
        required:[true,' La direccion es requerida'],
    },
    fecha:{
        type:String,
        required:[true,' La fecha es requerida'],

    },
    ciudad:{
        type:String,
        required:[true,' la ciudad  es requerida'],
    },
    descripcion:{
        type:String,
        required:[true,' La decripcion es requerida'],
        min:[150,'La decripcion debe contener mínimo 150 caracteres'],
        max:[500,'La decripcion debe contener máximo 500 cararacteres']
    }
})

module.exports = model('Delitos',DelitosSchema)