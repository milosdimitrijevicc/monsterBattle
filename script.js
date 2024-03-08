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
  const monsterAttack = (monster) => monster;
  


  //Getters
  const getDragon = () => dragon;
  const getWitch = () => witch;
  const getDealDMG = () => dmg;

  //Setters
  const setDragonReceivingDMG = function(){
    if (dragon[1] >= 2) {
      dragon[1] = dragon[1] - dmg
    } else {
      console.log("Previs si ranjen, ne mozes da napadas.")
    }
      return 'Dragon lost 1 HP'
  };
    const setWitchReceivingDMG = function(){
        if (witch[1] === 1) {
        console.log("Previs si ranjen, ne mozes da napadas.")
      } else if (witch[1] >= 1){
        witch[1] = witch[1] - dmg;
      }
        return 'Witch lost 1 HP';
      };
  const setDragonHealing = () => dragon[1] = 5;
  const setWitchHealing = () => witch[1] = 5;
  

  return {monsterAttack, getDragon, getWitch, setDragonReceivingDMG, setWitchReceivingDMG, getDealDMG, setDragonHealing, setWitchHealing};
}
const game = monsterCreator();


console.log(game.getWitch(),game.setWitchReceivingDMG(),game.setWitchReceivingDMG(),game.setWitchReceivingDMG());



