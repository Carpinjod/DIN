let OlderOfAgePromise = listing => {
    return new Promise ((resolve, reject) => {
        let result = listing.filter (person => person.age >= 18);
        if (result.length> 0)
            resolve (result);
        else
            reject ("No results");
});
};

let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];

OlderOfAgePromise(data)
    .then(result => {
         // si estamos aquí la promesa ha sido correctamente procesada
        console.log("Matched coincidences:");
        console.log(result);
    })
    .catch(error => {
    // si estamos aquí ha habido un error
    console.log("Error:", error);
 });