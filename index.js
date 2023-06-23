/*
* ░██████╗░██████╗░███████╗███████╗███╗░░██╗███████╗██████╗░░█████╗░░██████╗░
* ██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗██╔════╝░
* ██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║█████╗░░██████╔╝██║░░██║██║░░██╗░
* ██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██║░░██║██║░░╚██╗
* ╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██║░░░░░██║░░██║╚█████╔╝╚██████╔╝
* ░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░
*
* The content of this file is licensed using the CC-BY-4.0 license
* which requires you to agree to its terms if you wish to use or make any changes to it.
*
* @license CC-BY-4.0
* @link Github - https://github.com/andriycraft/GreenFrogMCBE
* @link Discord - https://discord.gg/UFqrnAbqjP
*/
const Frog = require("../../src/Frog");

const craftingDataToRuntimeIds = require('./craftingDataToRuntimeIds')

const dumpedIds = craftingDataToRuntimeIds.generate()

function handlePlayerChat(event) {
  const { player } = event;
  const id = generateBlockId();

  let x = Math.floor(player.location.x)
  let y = Math.floor(player.location.y - 2)
  let z = Math.floor(player.location.z)

  console.log(`Placing ${id} at ${x} ${y} ${z}`)
  player.sendMessage(`§ePlacing §c${id} §eat §9${x} §9${y} §9${z}`);

  player.world.placeBlock(x, y, z, id);
}

function generateBlockId() {
  return dumpedIds[Math.floor(Math.random() * dumpedIds.length)];
}

module.exports = {
  onLoad() {
    Frog.eventEmitter.on('playerChat', handlePlayerChat);
  }
};
