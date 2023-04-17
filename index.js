import express from 'express';
const app =express();
const students = [
        "Aya",
        "Esraa",
        "Ali",
      "Ahmad",
]

const studentsfunction = (request,response) => {
    let output = '<ul>';
    for (let i=0;i<students.length;i++){
       
        output += '<li>' + students[i] +'</li>';
    }


    output+= '</ul>'
    response.send(output);
};

app.get('/students',studentsfunction)

app.listen(3001);