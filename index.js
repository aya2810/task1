import express from 'express';
const app =express();
const students=[
    {
        id:1,
        name:"Aya",
        city:"Tanta",
    },
    {
        id:2,
        name:"Esraa",
        city:"Tanta",
    },
    {
        id:3,
        name:"Ali",
        city:"Shibeen",
    },
    {
        id:4,
        name:"Ahmad",
        city:"Alex",
    },
];

const studentsfunction = (request,response) => {
    let output = '<ul>';
    for (let i=0;i<students.length;i++){
        const student=students[i];

        output += '<li>' + student.name+'</li>';
    }


    output+= '</ul>'
    response.send(output);
};

app.get('/students',studentsfunction)

app.listen(3000);