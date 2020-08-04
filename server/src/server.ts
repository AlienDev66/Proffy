import express, { response } from "express";

const app = express();~

app.use(express.json());

app.post('/users', (request, response)=>{

    const Users = [
    {
        nome: 'Domingos Capitango',
        idade: 19,
        genero: "Masculino"
    },
    {
        nome: 'Domingos Capitango',
        idade: 19,
        genero: "Masculino"
    },
    {
        nome: 'Domingos Capitango',
        idade: 19,
        genero: "Masculino"
    },
]

return response.json(Users);

})

app.listen(3333);
