//usei o express pra criar e configurar meu servidor
const express = require("express")

const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias exercitationem inventore ab iste praesentium nulla, tempore ratione et fugiat nihil architecto aliquam autem suscipit ea temporibus animi impedit libero        ",
        url: "https://github.com/getuliopg"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias exercitationem inventore ab iste praesentium nulla, tempore ratione et fugiat nihil architecto aliquam autem suscipit ea temporibus animi impedit libero        ",
        url: "https://github.com/getuliopg"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias exercitationem inventore ab iste praesentium nulla, tempore ratione et fugiat nihil architecto aliquam autem suscipit ea temporibus animi impedit libero        ",
        url: "https://github.com/getuliopg"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias exercitationem inventore ab iste praesentium nulla, tempore ratione et fugiat nihil architecto aliquam autem suscipit ea temporibus animi impedit libero        ",
        url: "https://github.com/getuliopg"
    },
]

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks que deixa configurar js no html
const nunjucks = require("nunjucks")  
nunjucks.configure("views",{
    express:server,
    noCache: true, //boolean = true false.
})

//criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res) {

    let lastIdeas = []                   //let = deixa a variavel variar, diferente de const.
    for (let idea of ideas) {
        if(lastIdeas.length < 2) {      //setando o valor pra pegar somente 2 ideias
            lastIdeas.push(idea)
        }
    }

    lastIdeas = lastIdeas.reverse()     //dando reverse na ideia pra pegar as 2 ultimas.

    return res.render("index.html",{ideas: lastIdeas})
})

server.get("/ideias", function(req, res) {
    return res.render("ideias.html")
})


//liguei meu servidor na porta 3000
server.listen(3000) 