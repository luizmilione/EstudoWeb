var cadastro = [
    {
        "nome": "Luiz Gabriel",
        "cidade": "BH",
        "idade": 25,
        "veiculos": [
            {
                "marca": "Honda",
                "modelo": "Civic",
                "ano": "2020"
            }
        ]
    },
    {
        "nome": "Francielly",
        "cidade": "Lamim",
        "idade": 21,
        "veiculos": [
            {
                "marca": "Fiat",
                "modelo": "Uno",
                "ano": 2013
            },
            {
                "marca": "VW",
                "modelo": "Voyage",
                "ano": 2015
            }
        ]
    },
    {
        "nome": "Julia",
        "cidade": "Rio de Janeiro",
        "idade": 22,
        "veiculos": []

    }
];

function ExibirCadastro(){
    var textoHTML = '';
    for (let x = 0; x < cadastro.length; x++) {
        textoHTML += `Pessoa:  ${cadastro[x].nome} <br>`;
        for (let y = 0; y<cadastro[x].veiculos.length; y++){
            textoHTML += `<li>Marca: ${cadastro[x].veiculos[y].marca}, Modelo: ${cadastro[x].veiculos[y].modelo}, Ano: ${cadastro[x].veiculos[y].ano}</li>`
        }
    }

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    //alert (textoHTML);
}