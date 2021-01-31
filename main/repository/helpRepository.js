const help = require ('../model/helpModel');

module.exports = {
    get: async (data, fields) => {
      try {
        return await help.findOne(data, fields);
      } catch (error) {
        console.log(error)
        throw error;
      }
    },
 
    getMultiple: async (data, fields) => {
      try {
        return await help.find(data, fields);
      } catch (error) {
        console.log(error)
        throw error;
      }
    },
 
    create: async data => {
      try {
        return await help.create(data);
      } catch (error) {
        console.log(error)
        throw error;
      }
    },
 
    modify: async data => {
      try {
        return await help.findOneAndUpdate(
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
            return await help.findOneAndRemove(
                { typeOfHelp: data},
                { new: true}
            );
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
  }
