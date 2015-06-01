var plant = {
  stage : "seed",
  height : 0,
  overfed: false,
  overwatered: false,
  foodCounter: 0,
  waterCounter: 0,
  hasFlowers: false,
  flower: function(thing) {
    if (thing === "sun") {

      this.hasFlowers = true;

    } else if (thing === "shade") {
      this.hasFlowers = false;

    }
  },
  water: function(){

    if (plant.overfed && plant.overwatered) {
      this.stage = "dead";
    }

    else if (plant.height >= 12 ) {
      plant.waterCounter ++;

      if (plant.waterCounter >=3) {
        plant.overwatered = true;
      }

    }
    else if (plant.stage  === "seed" ) {
      this.stage = "plant"
    }
    else if (plant.stage ==="plant") {
      this.height += 2;
    }

  },

  feed: function(food){

    if (plant.overfed && plant.overwatered) {
      this.stage = "dead";
    }
    else if (plant.height >= 12 ) {
      plant.foodCounter ++;

      if (plant.foodCounter >=3) {
        plant.overfed = true;
      }
    }
    else if (food === "plant food") {
      this.height += 1;
    }
    else if (food === "antifreeze") {
      this.stage = "dead";
    }

  }

}





plant.water();
plant.water();
plant.water();
plant.water();
plant.water();
plant.water();
plant.water();
plant.water();
plant.water();
plant.water();
plant.water();
plant.water();

plant.flower("sun");
console.log(plant.hasFlowers);
plant.flower("shade");
console.log(plant.hasFlowers);

plant.feed("plant food");
plant.feed("plant food");
plant.feed("plant food");
plant.feed("plant food");


console.log(plant.stage);
