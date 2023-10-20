function createUser(name) {
  const discoreName = "@" + name;
  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;
  return {
    name,
    discoreName,
    getReputation,
    giveReputation,
  };
}
const nico = createUser("nico");
nico.giveReputation();
nico.giveReputation();
console.log(nico);

console.log({
  discordName: nico.discoreName,
  reputation: nico.getReputation(),
});
// Prototypal inheritance with factories
function createPlayer(name, level) {
  const { discoreName, getReputation } = createUser(name);
  const increseLevel = () => level++;
  return { name, discoreName, getReputation, increseLevel };
}

const milo = createPlayer("milo", 3);
milo.increseLevel();
milo.increseLevel();
console.log({
  name: milo.name,
  discoreName: milo.discoreName,
  level: milo.increseLevel(),
});
