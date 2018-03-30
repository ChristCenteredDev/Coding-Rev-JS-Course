// Every and Some Helper

const students = [
    {name: "Francis", grade: 4},
    {name: "Martin", grade: 5},
    {name: "Martha", grade: 7},
];

const every = students.every(function (student) {
    return student.grade > 6;
});

console.log(every); // false

const some = students.some(function (student) {
    return student.grade > 6;
});

console.log(some); // true