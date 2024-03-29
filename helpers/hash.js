const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashGenerate =async(plainPassword)=>{
   try{
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPassword,salt);
    return hash;
   }
   catch(err){
    return false;
   }
}
const hashValidator = async(plainPassword,hashedPassword)=>{
    try{
        const result = await bcrypt.compare(plainPassword,hashedPassword);
        return result;
    }
    catch(err){
        return false;
    }
}

module.exports.hashGenerate = hashGenerate;
module.exports.hashValidator = hashValidator;