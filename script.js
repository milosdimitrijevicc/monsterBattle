//napravi funkciju monsterCreator, ona treba da ima od state health(5) i speed(10).
//od funkcija treba da ima monsterAttack, monsterFly i monsterHeal.
//kad pozovem funkciju monsterAttack helt se smanjuje za 1, ako su helti dodju do 1 console.log(previse si ranjen ne mozes da napadas) i helti se ne smanjuju vise.
//kada pozovem funkciju heal helti se vracaju na 5.
//kad pozovem funkciju monsterFly brzina se povecava za 5;
//nakon svakog pozivanja funkcije console.log trenutne helte i brzinu
const monsterCreator = () => {
  
  const dragon = [
    monsterName = 'dragon',
    health = 5,
    speed = 10
  ] 
  const witch = [
    monsterName = 'witch',
    health = 5,
    speed = 10
  ]
  const dmg = 1;
  const speedBoost = 5;
  const monsterAttack = (monster) => monster;
  


  //Getters
  const getDragon = () => dragon;
  const getWitch = () => witch;
  const getDragonStats = () => console.log(`Dragon 💙:${dragon[1]}, Dragon 💨:${dragon[2]}`);
  const getWitchStats = () => console.log(`Witch 💜:${witch[1]}, Witch 💨:${witch[2]}`);

  //Setters
  const setDragonReceivingDMG = function(){
      if (dragon[1] >= 2) {
      dragon[1] = dragon[1] - dmg
      console.log('💥 Dragon is attacked! (-1 HP)');
      } 
      else {
      console.log("🚨 Previs si ranjen, ne mozes da napadas.");
    }
    return console.log(`Dragon 💙:${dragon[1]}, Dragon 💨:${dragon[2]}`);
  };

  const setWitchReceivingDMG = function(){
      if (witch[1] >= 2) {
        dragon[1] = witch[1] - dmg
        console.log('💥 Witch is attacked! (-1 HP)');
      } 
      else {
        console.log("🚨 Previs si ranjen, ne mozes da napadas.");
      }
      return console.log(`Witch 💜:${witch[1]}, Witch 💨:${witch[2]}`);
      };

  const setDragonFlyingBoost = function() {
    dragon[2] = dragon[2] + speedBoost;
    console.log("Dragon got FLYING BOOST 🚀")
    return `Dragon 💙:${dragon[1]}, Dragon 💨:${dragon[2]}`;
  }
  const setWitchFlyingBoost = function() {
    witch[2] = witch[2] + speedBoost;
    console.log("Witch got FLYING BOOST 🚀")
    return `Witch 💜:${witch[1]}, Witch 💨:${witch[2]}`;
  }
  const setDragonHealing = () => dragon[1] = 5;
  const setWitchHealing = () => witch[1] = 5;
  

  return {monsterAttack, getDragon, getWitch, setDragonReceivingDMG, setWitchReceivingDMG, setDragonHealing, setWitchHealing, setDragonFlyingBoost, setWitchFlyingBoost, getDragonStats, getWitchStats};
}
const game = monsterCreator();

game.getDragonStats();
game.getWitchStats();
game.setDragonReceivingDMG();

