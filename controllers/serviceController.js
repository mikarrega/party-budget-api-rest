const {Service: serviceModel} = require("../models/Service")

const serviceController = {
    create: async(req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }

          const response = await serviceModel.create(service)
          res.status(201).json({response, msg: "Serviço criado com sucesso!"})
        
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req, res) => {
        try {
            const services = await serviceModel.find()
            res.json(services)
        } catch (error) {
            console.log(error)
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id

            const service = await serviceModel.findById(id)

            if(!service) {
                res.status(404).json({ msg: "Serviço não encontrado."})
                return
            }

            res.json(service)

        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id

            const service = await serviceModel.findById(id)

            if(!service) {
                res.status(404).json({ msg: "Serviço não encontrado."})
                return
            }

            const deletedService = await serviceModel.findByIdAndDelete(id)

            res.status(200)
            .json({ deletedService, msg: "Serviço excluído com sucesso" })

        } catch (error) {
            console.log(error)
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id

            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }

            const updatedService = await ServiceModal.findByIdAndUpdate(id, service)

            if(!updatedService) {
                res.status(404).json({ msg: "Serviço não encontrado."})
                return
            }

            res.status(200)
            .json({ service, msg: "Serviço atualizado com sucesso" })

        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = serviceController