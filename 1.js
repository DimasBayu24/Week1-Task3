//1st-answer


const Person = [
  {
    name: "Tatas",
    company: "Arkademy",
    job: "Trainer",
    status: "single",
    city: "Jogja"
  },
  {
    name: "Pratama",
    company: "Emago",
    job: "Trainer",
    status: "single",
    city: "Jakarta"
  }
];

const updatePerson = Person.map(i => {
  return { ...i };
});
// const updatePerson = [...Person]                                                             //meng-copy nilai pada array person ke updatePerson

const updateTatas = updatePerson.find(updatePerson => updatePerson.name == "Tatas");
updateTatas.city = "Jakarta";
updateTatas.status = "Marriage";

const updatePratama = updatePerson.find(updatePerson => updatePerson.name == "Pratama");
updatePratama.city = "Jogja";

console.log("Sebelum disesuaikan" , Person)
console.log("Sesudah disesuaikan ", updatePerson);

// if (updatePerson.name == "Tatas" ) {
//     updatePerson.city = "Jakarta";
// updatePerson.status = "Marriage";


// }
// if (updatePerson == "Pratama"){
//     updatePratama.city = "Jogja";
// }
// console.log(updatePerson);
// console.log(Person);