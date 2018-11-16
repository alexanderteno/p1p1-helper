import Pack from './pack';

class Draft {

  addPack = (setName: string): Pack => {
    const setPath = `../sets/${setName}.json`;
    const setInformation = require(setPath);
    return new Pack(setInformation);
  }

}

export default Draft;
