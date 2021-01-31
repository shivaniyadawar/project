const helpRepository = require('../repository/helpRepository');
module.exports = {
    addHelp: async body => {
      try {
       const helpType = await helpRepository.get({ typeOfHelp: body.typeOfHelp }, "-__v -_id ");
        if (helpType == null || helpType == "null" )  {
          const helpData = {
            typeOfHelp: body.typeOfHelp,
            description: body.description
         }
          
          await helpRepository.create(helpData);
          return ({ message: "help created !" });
      }
         else {
           return ({ message: `help is already present !` })
         }
      } catch (error) {
        return { name: error.name, message: error.message };
      }
    },

    getAllHelp: async body => {
        try {
         const allHelps = await helpRepository.getMultiple({ }, "-__v -_id ");
         return  allHelps;
        } catch (error) {
          return { name: error.name, message: error.message };
        }
      },
    modifyHelp: async body => {
        try {
            const helpType = await helpRepository.get({ typeOfHelp: body.typeOfHelp }, "-__v -_id ");
             if (helpType !== null && helpType !== "null" )  {
               const helpData = {
                 typeOfHelp: body.typeOfHelp,
                 description: body.description
              }
               
               await helpRepository.modify(helpData);
               return ({ message: "help modified !" });
           }
              else {
                return ({ message: `please create a new help !` })
              }
           } catch (error) {
             return { name: error.name, message: error.message };
           }
    },
    deleteHelp: async body => {
        try {
            const helpType = await helpRepository.get({ typeOfHelp: body.typeOfHelp }, "-__v -_id ");
             if (helpType !== null && helpType !== "null" )  {
            await helpRepository.delete(body.typeOfHelp);
               return ({ message: "help deleted !" });
           }
              else {
                return ({ message: `help is not present !` })
              }
           } catch (error) {
             return { name: error.name, message: error.message };
           }
}
}