const helpService = require('../services/helpService');
module.exports = {
    addHelp: async (request, response) => {
        if (!request.body.typeOfHelp|| !request.body.description ){
         return response.status(400).send({ message: "please fill all the fields" })}
        const result = await helpService.addHelp(request.body)
        return response.status(200).send(result);
    },

    getAllHelp: async (request, response) => {
        const result = await helpService.getAllHelp(request.body)
        return response.status(200).send(result);
    },
    
    modifyHelp: async (request, response) => {
        if (!request.body.typeOfHelp|| !request.body.description ){
         return response.status(400).send({ message: "please fill all the fields" })}
        const result = await helpService.modifyHelp(request.body)
        return response.status(200).send(result);
    },
    deleteHelp: async (request, response) => {
        if (!request.body.typeOfHelp ){
         return response.status(400).send({ message: "please fill all the fields" })}
        const result = await helpService.deleteHelp(request.body)
        return response.status(200).send(result);
    },
    
}