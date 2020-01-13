//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const arrayPlanet = [

  { name: 'mercury', value: 0.2408467 },
  { name: 'venus', value: 0.61519726 },
  { name: 'earth', value: 1.0 },
  { name: 'mars', value: 1.8808158 },
  { name: 'jupiter', value: 11.862615 },
  { name: 'saturn', value:29.447498 },
  { name: 'uranus', value: 84.016846 },
  { name: 'neptune', value: 164.79132 },

]

class Planet {
  constructor (earthTime) {
    this.earthTime = earthTime
  }
  
  convertToEarthYear (time) {
    return ((((time/60)/60)/24)/365.25)
  }

  getPlanetTime (time) {
    return (this.convertToEarthYear(time)/this.earthTime).toFixed(2)
  }

}

export const age = (planet, time) => {

const currentPlanet = arrayPlanet.find(
  function(data){
    return data.name === planet
  } 
)
const createPlanet = new Planet (currentPlanet.value)

console.log (planet,': ',createPlanet.getPlanetTime(time))
return parseFloat (createPlanet.getPlanetTime(time))

};
