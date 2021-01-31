const helpReq = require ('../model/helpRequestModel');

module.exports = {
    get: async (data, fields) => {
      try {
        return await helpReq.findOne(data, fields);
      } catch (error) {
        console.log(error)
        throw error;
      }
    },
 
    getMultiple: async (data, fields) => {
      try {
        return await helpReq.find(data, fields);
      } catch (error) {
        console.log(error)
        throw error;
      }
    },
 
    create: async data => {
      try {
        return await helpReq.create(data);
      } catch (error) {
        console.log(error)
        throw error;
      }
    },
 
    modify: async data => {
      try {
        return await helpReq.findOneAndUpdate(
          { typeOfHelp: data.typeOfHelp },
          { $set: { typeOfHelp: data.typeOfHelp, description: data.description } },
        );
      } catch (error) {
        console.log(error)
        throw error;
      }
    },

    delete: async data => {
        try {
            return await helpReq.findOneAndRemove(
                { typeOfHelp: data},
                { new: true}
            );
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
  }
