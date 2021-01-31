const helpRequestService = require('../services/helpRequestService');

module.exports = {
    reqHelp: async (request, response) => {
        if (!request.body.typeOfHelp){
         return response.status(400).send({ message: "please fill all the fields" })}
        const result = await helpRequestService.reqHelp(request.body)
        return response.status(200).send(result);
    },

    getAllReq: async (request, response) => {
        const result = await helpRequestService.getAllHelpReq(request.body)
        return response.status(200).send(result);
    },

    getHelpReq: async (request, response) => {
        const result = await helpRequestService.getHelpReq(request.body)
        return response.status(200).send(result);
    },

    getMyHelpReq: async (request, response) => {
        const result = await helpRequestService.getMyHelpReq(request.body)
        return response.status(200).send(result);
    },
    
    modifyHelpReq: async (request, response) => {
        if (!request.body.helpId|| !request.body.asignee ){
         return response.status(400).send({ message: "please fill all the fields" })}
        const result = await helpRequestService.modifyHelpReq(request.body)
        return response.status(200).send(result);
    },

    completeHelpReq: async (request, response) => {
        if (!request.body.helpId ){
         return response.status(400).send({ message: "please fill all the fields" })}
        const result = await helpRequestService.completeHelpReq(request.body)
        return response.status(200).send(result);
    },

    deleteHelpReq: async (request, response) => {
        if (!request.body.helpId ){
         return response.status(400).send({ message: "please fill all the fields" })}
        const result = await helpRequestService.deleteHelpRequest(request.body)
        return response.status(200).send(result);
    },
}