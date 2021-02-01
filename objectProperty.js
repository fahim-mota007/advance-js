const students = [
    {id: 21, name: 'a'},
    {id: 22, name: 'b'},
    {id: 23, name: 'c'},
    {id: 24, name: 'd'},
    {id: 25, name: 'e'}
];


const names = students.map (s => s.name);
const ids = students.map(s => s.id);
console.log(ids);