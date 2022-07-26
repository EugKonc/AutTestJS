/*
input city and prints all matched;
input age and prints less or same age;
filter students by alphabetic names and prints only names;
filter female students by married status;
input age and sex and prints matched;
input object with a new student and add it to the start of array;
print all unique cities.
*/


const students = [
    {
        name: 'Vasya Pupkin',
        age: 17,
        sex: 'Male',
        isMarried: false,
        city: 'Mogilev',
    },
    {
        name: 'Zoya Petrovna',
        age: 23,
        sex: 'Female',
        isMarried: true,
        city: 'Mogilev',
    },
    {
        name: 'Petr Ivanov',
        age: 30,
        sex: 'Male',
        isMarried: true,
        city: 'Minsk',
    },
    {
        name: 'Vitali Ivanov',
        age: 19,
        sex: 'Male',
        isMarried: false,
        city: 'Vitebsk',
    },
    {
        name: 'Lavrenti Sakalov',
        age: 20,
        sex: 'Male',
        isMarried: true,
        city: 'Brest',
    },
    {
        name: 'Olga Sakalova',
        age: 23,
        sex: 'Female',
        isMarried: true,
        city: 'Grodno',
    },
]

function City (cityInput){
students.map(function (x) {
    if (x.city == cityInput) {
      return console.log(x);
    } else {
      return null;
    }
  });}

  //City("Mogilev");

  function Age (AgeInput){
    students.map(function (x) {
        if (x.age <= AgeInput) {
          return console.log(x);
        } else {
          return null;
        }
      });}
    
     // Age(18);

    //filter students by alphabetic names and prints only names; 
    
      function FilterByAlp (array){
        array.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      array.forEach((item) => {
        console.log(item.name);
    })
    }

    //FilterByAlp(students);

    function FilterFemSta (array){

        array.forEach((item)=>{
            if (item.sex == 'Female' & item.isMarried == true){
                console.log(item.name," Married");
            }
        })
    }

    //FilterFemSta(students);

    function AgeAndSex (age,sex){
        students.forEach((item)=>{
            if (item.age == age & item.sex == sex){
                console.log(item);
            }
        })
    }

   // AgeAndSex(19,'Male');

   function InputNewStudent (name,age,sex,isMarried,city){
    let obj = {};
    obj.name = name,
    obj.age = age,
    obj.sex = sex,
    obj.isMarried = isMarried,
    obj.city = city;
    students.unshift(obj);
   }
InputNewStudent('Vitali Ivanov',55,'Male',false,'Vitebsk');
// console.log(students);

   function UniqCity (array){
let unique = [...new Set(array.map(item => item.city))];
console.log(unique);
  }

 // UniqCity(students);