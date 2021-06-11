const fs = require('fs');

function getdircontent(dir){
  let out = [];
  try {

    const files = fs.readdirSync(dir);
    files.forEach(file => {
       file = file.toString()
       file = file.substring(0, file.length-3);
       out.push(dir.replace("docs/","")+"/"+file)
    });
    return out;
  } catch (err) {
    console.log(err);
  }
}

savoury = getdircontent('docs/savoury')
sweet =  getdircontent('docs/sweet')
bread =  getdircontent('docs/bread')
cocktails = getdircontent('docs/cocktails')

module.exports = {
  sidebars:{
    Savoury: savoury,
    Sweet: sweet,
    Bread: bread,
    Cocktail: cocktails
  },
};
