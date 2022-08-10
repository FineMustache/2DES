const usuarios = [
    {
        nome: "Michael Douglas",
        username: "douglinha22",
        senha: "senhastops12",
        imagem: "https://www.perfildosfamosos.com/michael-douglas/foto-perfil-michael-douglas.jpg?v=152d36cb15e7367470a25c2b8cbf4080"
    },
    {
        nome: "Steve Mojang",
        username: "stevinhoinho",
        senha: "danonaogrosso",
        imagem: "https://imgs.ponto.com.br/1515649360/1xg.jpg?imwidth=500"
    }
]

const produtos = [
    {
        nome: "Vestido Sodré",
        preco: "R$ 229,00",
        imagem: "https://cdn.shopify.com/s/files/1/0367/4767/3731/products/vestido-sodre-azul-p-200000347-657.jpg?v=1631648731"
    },
    {
        nome: "Vestido Longo Vinho",
        preco: "R$ 69,90",
        imagem: "https://www.vitrineoutlet.com.br/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/v/e/vestido_longo_decotado_short_fenda_vinho_-_pv338_1__1.jpg"
    },
    {
        nome: "Vestido Amy Back to Black",
        preco: "R$ 250,00",
        imagem: "https://cuplovershop.cdn.plataformaneo.com.br/produto/616963690_VTC132-1_616963690.jpg"
    },
    {
        nome: "Vestido Midi Linho Assimétrico Com Fenda",
        preco: "R$ 239,95",
        imagem: "https://www.lezalez.com/dw/image/v2/BFCG_PRD/on/demandware.static/-/Sites-masterCatalog_Lunelli/default/dw53d29003/large/lezalez-1.3423L-016374-C1.jpg?sw=900&sfrm=jpg&sm=fit&q=80"
    },
    {
        nome: "Vestido Festa Longo Ondas Brilho",
        preco: "R$ 520,00",
        imagem: "https://tvz.vtexassets.com/arquivos/ids/231768/90553306_02_02-VESTIDO-FESTA-LONGO-ONDAS-BRILHO.jpg?v=637148898748800000"
    },
    {
        nome: "Vestido Longo Marinho Uruguai",
        preco: "R$ 890,00",
        imagem: "https://majeste.com.br/media/catalog/product/cache/6aea0b214d078863d2a2da5e651c6e73/v/e/vestido-longo-lurex-preto-uruguai_01_4.jpg"
    },
    {
        nome: "Vestido Ciganinha",
        preco: "R$ 99,90",
        imagem: "https://mariafilo.vteximg.com.br/arquivos/ids/349167-500-650/1513031_2739_2-VESTIDO-CURTO-RECORTES-FRANZIDO.jpg?v=637903081323170000"
    },
]

function carregar() {

    if (window.location.search.length > 0) {
        produtos.forEach(prod => {
            let novoProd = document.querySelector(".modelo").cloneNode(true)
            novoProd.querySelector(".prod-card-image").style.backgroundImage = "url(" + prod.imagem + ")"
            novoProd.querySelector("#prodName").innerHTML = prod.nome
            novoProd.querySelector("#prodPreco").innerHTML = prod.preco
            novoProd.classList.remove("modelo")
    
            document.querySelector(".prod-container").appendChild(novoProd)
        });

        const urlParams = new URLSearchParams(window.location.search)

        usuarios.forEach(u => {
            if (u.username == urlParams.get('username')) {
                document.querySelector(".nome-usuario").innerHTML = u.nome
                document.querySelector(".foto-usuario").style.backgroundImage = "url(" + u.imagem + ")"
            }
        });

        

    } else {
        window.location.href = "./login.html"
    }
}

function validaUsuario() {
    let inpUsername = document.querySelector("#inpUsername")
    let inpSenha = document.querySelector("#inpSenha")
    if (inpUsername.value.length > 0 && inpSenha.value.length > 0) {
        let achou = false
        usuarios.forEach(u => {
            if (u.username == inpUsername.value && u.senha == inpSenha.value) {
                window.location.href = "./main.html?username=" + u.username
                achou = true
            }
        });
        if (!achou) {
            document.querySelector(".error").classList.remove("escondes")    
        }
        
    }
}