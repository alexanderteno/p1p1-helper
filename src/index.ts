/// <reference path="../typings/memoryjs.d.ts"/>

// import Draft from './draft';
// import promptSync from 'prompt-sync';
import * as memoryjs from 'memoryjs';

const processes = memoryjs.getProcesses();

const mtgaProcesses = processes.filter((process) => process.szExeFile == 'MTGA.exe');

mtgaProcesses.forEach((mtgaProcess) => {
  const process = memoryjs.openProcess(mtgaProcess.th32ProcessID);
  const modules = memoryjs.getModules(process.th32ProcessID)

  console.log(modules.map((module) => {
    const FLAGS = 0x1;
    // 43 44 43 20 23 30 20
    const result = memoryjs.findPattern(process.handle, module.szModule, '434443', FLAGS, 0, 0);
    console.log(memoryjs);
    const memoryObject = memoryjs.readBuffer(process.handle, result, 128);
    return { module: module, offset: result, offsetHex: result.toString(16), memoryObject };
  }).filter((result) => result.offsetHex !== '10000000000000000'));
  memoryjs.closeProcess(process.handle);
})

// const draft = new Draft();
// const prompt = promptSync();
//
// while (prompt('Continue? ') === 'y') {
//
//   const pack = draft.addPack(prompt('What kind of pack? [guilds-of-ravnica]: ') || 'guilds-of-ravnica');
//
//   const cards_in_pack = parseInt(prompt('How many cards in this pack? '));
//   for (let j = 0; j < cards_in_pack; j++) {
//     while (!pack.addCard(prompt('Partial card name: '))) { }
//   }
//
//   pack.list();
//
// }
