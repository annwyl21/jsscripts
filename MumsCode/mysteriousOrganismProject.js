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
      let mutatedDna = dna;
      let randomNumDna = Math.floor(Math.random()*15);
      let newBase = returnRandBase();
      console.log(`\n This item was changed ${randomNumDna+1}\n ${dna[randomNumDna]} was changed to ${newBase}\n `);
      if(dna[randomNumDna] === newBase){
        console.log(`PROBLEM: base same ${newBase}`)
        this.mutate();
      }else {
      dna.splice(randomNumDna, 1, newBase);
      }
      return mutatedDna
    },
    compareDNA (mutatedDna) {
      let numberDnaSame;
      for (count = 0; count<15; count++){
        if(dna[count] === mutatedDna[count]){
          numberDnaSame++
        }
      }
      let percentage = Math.floor((numberDnaSame/15)*100);
      console.log(`\nspecimen #1 and specimen #2 have ${percentage}\% DNA in common`)
    }
  }
}

const newThing = pAequorFactory(1, mockUpStrand());
console.log(newThing);
newThing.compareDna(this.mutate());
console.log(newThing);