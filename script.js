function createUser(name) {
  const discordName = "@" + name;
  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;
  return { name, discordName, getReputation, giveReputation };
}

function createPlayer(name) {
  const { discordName, getReputation } = createUser(name);
  let level = 0;

  const increseLevel = () => level++;
  return { name, discordName, getReputation, increseLevel, level };
}
const milo = createPlayer("milo");
milo.increseLevel();
milo.increseLevel();
const nico = createUser("nico");
nico.giveReputation();
nico.giveReputation();
console.log(nico);
console.log({
  discordName: nico.discordName,
  reputation: nico.getReputation(),
});
console.log({
  name: milo.name,
  discordName: milo.discordName,
  reputation: milo.getReputation(),
  level: milo.level,
});
