//learning about class and inheritance (extends/ super)

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword() {
      const randomNumber = Math.floor(Math.random() *10000);
      return randomNumber;
    }
  
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  
  console.log(HospitalEmployee.generatePassword());

  //Creating a Library
  class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    set isCheckedOut(newValue) {
      this._isCheckedOut = newValue;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    getAverageRating() {
      let result = this.ratings.reduce((previousValue, rating) => previousValue + rating, 0);
      const arrayLength = this.ratings.length;
      return Math.floor(result/arrayLength);
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runtime) {
      super(title);
      this._director = director;
      this._runtime = runtime;
    }
  
    get director() {
      return this._director;
    }
  
    get runtime() {
      return this._runtime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = [];
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History Of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  