function aboutMe(name, age, gender, favoriteFood, favoriteSeries, favoriteMovies){
this.name = name;
this.age = age;
this.gender = gender;
this.favoriteFood = favoriteFood;
this.favoriteSeries = favoriteSeries;
this.favoriteMovies = favoriteMovies;
this.single = single;
}

let person01 = new Person("Angel", 22, "Male", "Pizza", "TWD", "Black");
console.log(person01);