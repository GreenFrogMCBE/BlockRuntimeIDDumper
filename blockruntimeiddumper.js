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

const dumpedIds = [
  339494639, 976881179, 994207970,
  1481921079, 368734180, 555751865,
  -1706049077, 927668178, -307481251,
  1912846579, -336983999, -2080260717,
  1014633093, 1576086683, 16603170,
  904773342, 802520842, -976483655,
  -362985564, 379907727, -156512822,
  -2050534635, -1850412551, 769879805,
  1313381298, -2106754178, -1037882073,
  -1837802080, 556073414, -199522344,
  -2089484049
]

function handlePlayerChat(event) {
  const { player } = event;
  const id = generateBlockId();

  let x = Math.floor(player.location.x)
  let y = Math.floor(player.location.y - 2)
  let z = Math.floor(player.location.z)

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
