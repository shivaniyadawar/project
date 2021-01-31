const helpRequestRepository = require('../repository/helpRequestRepository');
module.exports = {
    reqHelp: async body => {
        try {
            await helpRequestRepository.create(body);
            return ({ message: "help created !" });
        } catch (error) {
            return { name: error.name, message: error.message };
        }
    },

    getAllHelpReq: async body => {
        try {
            const allHelps = await helpRequestRepository.getMultiple({staus: body.reqStatus}, "-__v -_id ");
            return allHelps;
        } catch (error) {
            return { name: error.name, message: error.message };
        }
    },

    getHelpReq: async body => {
        try {
            const helpReq = await helpRequestRepository.getMultiple({helpId: body.helpId}, "-__v -_id ");
            return helpReq;
        } catch (error) {
            return { name: error.name, message: error.message };
        }
    },

    getMyHelpReq: async body => {
        try {
            const helpReq = await helpRequestRepository.getMultiple({email: body.email}, "-__v -_id ");
            return helpReq;
        } catch (error) {
            return { name: error.name, message: error.message };
        }
    },



    modifyHelpReq: async body => {
        try {
            const helpId = await helpRequestRepository.get({ helpId: body.helpId }, "-__v -_id ");
            if (helpId !== null && helpId !== "null") {
                const helpData = {
                    asignee: body.asignee,
                    status: "in progress"
                }

                await helpRequestRepository.modify(helpData);
                return ({ message: "help modified !" });
            }
            else {
                return ({ message: `request not found !` })
            }
        } catch (error) {
            return { name: error.name, message: error.message };
        }
    },

    completeHelpReq: async body => {
        try {
            const helpId = await helpRequestRepository.get({ helpId: body.helpId }, "-__v -_id ");
            if (helpId !== null && helpId !== "null") {
                const helpData = {
                    status: "completed"
                }

                await helpRequestRepository.modify(helpData);
                return ({ message: "request completed !" });
            }
            else {
                return ({ message: `request not found !` })
            }
        } catch (error) {
            return { name: error.name, message: error.message };
        }
    },

    deleteHelpRequest: async body => {
        try {
            const helpId = await helpRequestRepository.get({ helpId: body.helpId }, "-__v -_id ");
            if (helpType !== null && helpType !== "null") {
                await helpRequestRepository.delete(body.helpId);
                return ({ message: "help deleted !" });
            }
            else {
                return ({ message: `Request is not present !` })
            }
        } catch (error) {
            return { name: error.name, message: error.message };
        }
    }
}