const { models } = require('../lib/sequelize')
const boom = require('@hapi/boom')

class EmpresaService {

    constructor() {

    }

    async getAll() {
        const result = await models.Empresa.findAll()
        return result
    }

    async create(data) {
        const newData = await models.Empresa.create(data)
        return newData
    }

    async findOne(id) {
        const data = await models.Empresa.findByPk(id)
        if (!data) {
            throw boom.notFound('no existe el registro')
        }
        return data
    }

    async update(id, data) {
        const dataUpdated = await this.findOne(id)
        const result = await dataUpdated.update(data)
        return result
    }

    async delete(id) {
        const datadeleted=await this.findOne(id)
        await datadeleted.destroy()
        return true
    }
}

module.exports = EmpresaService