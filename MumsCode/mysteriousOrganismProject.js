// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory (specimenNum, dna){
  return { 
    specimenNum: specimenNum,
    dna: dna,
    mutate () {
      let mutatedDna = dna.slice();
      console.log(this.dna);
      let randomNumDna = Math.floor(Math.random()*15);
      let newBase = returnRandBase();
      console.log(`\n This item was changed ${randomNumDna+1}\n ${dna[randomNumDna]} was changed to ${newBase}\n `);
      if(dna[randomNumDna] === newBase){
        console.log(`PROBLEM: base same ${newBase}`)
        this.mutate();
      }else {
      mutatedDna.splice(randomNumDna, 1, newBase);
      }
      return mutatedDna
    },
    compareDna (object) {
      let dnaCheck = 15;
      let originalDna = this.dna;
      console.log(this.dna);
      let changed = object.dna;
      console.log(changed);
      for (count = 0; count<15; count++){
        if(originalDna[count] !== changed[count]){
          dnaCheck = dnaCheck-1;
        }
      } 
      let percentage = Math.floor((dnaCheck/15)*100);
      console.log(`\nspecimen #1 and specimen #2 have ${percentage}\% DNA in common`)
    },

    willLikelySurvive(){
      let subjects = dna.slice();
      let survivors = subjects.filter (letter => letter === 'C' || letter === 'G')
      if (survivors.length >=9){
        return true
      } else {
        return false
      }
    }
  }
}

let thirtyNewThings = [];
for (theCount = 1; theCount <=30; theCount++) {
  //create 30 newThings
  const newThing = pAequorFactory(theCount, mockUpStrand());
  //check if they will survive and record all the survivors
  if(newThing.willLikelySurvive() === false){
    theCount = theCount-1;
  }else {
    //store these instances/ objects in an array
    thirtyNewThings.push(newThing);
    //console.log(`${newThing.specimenNum}, ${newThing.dna}`);
  }
}

//The new array of 30 things...
//console.log(thirtyNewThings);

//comparing the dna of 2 things...
//let dna1 = thirtyNewThings[0];
//console.log(`Dna1 ${dna1}`);
//let dna25 = thirtyNewThings[25];
//console.log(`DNA25 ${dna25}`);
//dna1.compareDna(dna25);

//mutating DNA objects...
//let dna13 = thirtyNewThings[13];
//console.log(`${dna13.specimenNum}\n ${dna13.dna}`);
//console.log(dna13.mutate());