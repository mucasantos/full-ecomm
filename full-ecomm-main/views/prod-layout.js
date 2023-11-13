const products = require('../products.json');

module.exports = () => {

    return `    
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Samuel Santos" />
     
    <!-- CSS -->
    <link rel="stylesheet" href="/style/header.css" />
    <link rel="stylesheet" href="/style/nav.css" />
    <link rel="stylesheet" href="/style/product.css" />
    <link rel="stylesheet" href="/style/info.css" />
    <link rel="stylesheet" href="/style/about.css" />
    <link rel="stylesheet" href="/style/footer.css">

    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Loja de acessórios</title>
</head>
<body>
    <header>
        <div id="container">
            <div class="headerRow">
                <!-- Whatsapp -->
                <section class="whatsapp">
                    <span class="icon">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                    <a href="">
                        <span>Fale pelo whatsapp</span>
                    </a>
                </section>
                <!-- FAQ -->
                <section class="faq">
                    <span class="icon">
                        <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                    </span>
                    <a href="">
                        <span>Tire suas dúvidas</span>
                    </a>
                </section>
                <!-- Search -->
                <div id="search-container">
                    <section class="search">
                        <button class="buttonSearch">
                            <span class="icon">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>                            
                        </button>
                        <input type="search" name="search" id="searchInput" class="searchInput" placeholder="Pesquisar..." >
                    </section>                
                </div>
            </div>
        </div>
    </header>

    <!-- Nav -->
    <nav>
        <div id="container">
            <div class="headerRow">
                <!-- Logo -->
                <section class="logo">
                    <a href="">
                        <h1 class="font">Muca</h1>
                        <p class="font">Acessórios em geral</p>
                    </a>
                </section>
                <!-- Menu -->
                <section class="menu">
                    <a href="">
                        <ul>
                            <li class="font">Loja</li>
                            <li class="font">Sobre</li>
                            <li class="font">FAQ</li>
                            <li class="font">Contato</li>
                        </ul>
                    </a>
                </section>
                <div class="headerRowTwo">
                    <!-- Login -->
                    <section class="login">
                        <span class="icon">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </span>
                        <a href="">                            
                            <span class="font">Login</span>
                        </a>
                    </section>
                    <!-- Social Media -->
                    <section class="socialMedia">
                        <!-- Facebook -->
                        <a href="">
                            <span class="iconSocial">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </span>
                        <a>
                        <!-- Instagram -->
                        <a href="">
                            <span class="iconSocial">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </span>
                        </a>
                        <!-- Pinterest -->
                        <a href="">
                            <span class="iconSocial">
                                <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                            </span>
                        </a>
                        <!-- Bag -->
                        <a href="">
                            <span class="iconSocial">
                                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                            </span>
                        </a>
                    </section>
                </div>
            </div>
        </div>
    </nav>

    <main id="container">
        <section class="product">
    ${products.map(props => {
       return `<div class="productCard">
            <div class="productCardFlag">
                <span>${props.flag}</span>
            </div>
            <div class="productCardImage">
                <img src="${props.image}" alt="Product One" />
            </div>
            <div class="productInfo">
                <h2>${props.name}</h2>
                <hr />
                <span>${props.price}</span>
            </div>
        </div>
    `}).join(' ')}
        </section>

        <!-- Information -->
        <section class="info">
            <!-- Free shipping -->
            <div class="infoCard">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <g id="Layer_1">
                        <path d="M3,49h44V15h2V1H1v14h2V49z M45,47H5V15h40V47z M3,3h44v10H3V3z"/>
                        <path d="M15,27h20c2.206,0,4-1.794,4-4s-1.794-4-4-4H15c-2.206,0-4,1.794-4,4S12.794,27,15,27z M15,21h20c1.103,0,2,0.897,2,2
                            s-0.897,2-2,2H15c-1.103,0-2-0.897-2-2S13.897,21,15,21z"/>
                    </g>
                </svg>
                <div class="infoCardText">
                    <p>Frete Grátis</p>
                    <p>Confira Condições</p>
                </div>
            </div>
            <!-- Information -->
            <div class="infoCard">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                    <g>
                        <polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="1,59 22,51 42,59 63,51 63,5 42,13 22,5 
                            1,13 	"/>
                        <g>
                            <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="22" y1="5" x2="22" y2="51"/>
                        </g>
                        <g>
                            <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="42" y1="13" x2="42" y2="59"/>
                        </g>
                    </g>
                </svg>
                <div class="infoCardText">
                    <p>Enviamos</p>
                    <p>para todo Brasil</p>
                </div>
            </div>
            <!-- Pay -->
            <div class="infoCard">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100.353 100.353" style="enable-background:new 0 0 100.353 100.353;" xml:space="preserve">
                    <g>
                        <path d="M89.381,19.52h-78.76c-3.983,0-7.224,3.241-7.224,7.224v4.828v10.404v31.281c0,3.983,3.241,7.223,7.224,7.223h78.76
                            c3.983,0,7.223-3.24,7.223-7.223V41.976V31.572v-4.828C96.604,22.761,93.364,19.52,89.381,19.52z M6.396,26.744
                            c0.001-2.33,1.895-4.224,4.224-4.224h78.76c2.329,0,4.223,1.895,4.223,4.224v3.328H6.396V26.744z M93.604,73.256
                            c0,2.328-1.895,4.223-4.223,4.223h-78.76c-2.329,0-4.224-1.895-4.224-4.223V43.475h87.207V73.256z M93.604,40.475H6.397v-7.404
                            h87.207V40.475z"/>
                        <path d="M17.894,71.566c2.885,0,5.231-2.345,5.231-5.227c0-2.884-2.346-5.231-5.231-5.231c-2.883,0-5.229,2.347-5.229,5.231
                            C12.665,69.221,15.011,71.566,17.894,71.566z M17.894,64.108c1.23,0,2.231,1.001,2.231,2.231c0,1.228-1.001,2.227-2.231,2.227
                            c-1.229,0-2.229-0.999-2.229-2.227C15.665,65.109,16.665,64.108,17.894,64.108z"/>
                        <path d="M29.08,68.015h42.264c0.829,0,1.5-0.671,1.5-1.5s-0.671-1.5-1.5-1.5H29.08c-0.829,0-1.5,0.671-1.5,1.5
                            C27.58,67.344,28.251,68.015,29.08,68.015z"/>
                    </g>
            </svg>
                <div class="infoCardText">
                    <p>Até 12x sem juros</p>
                    <p>10% Off no Boleto</p>
                </div>
            </div>
            <!-- Safe -->
            <div class="infoCard">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <g id="Layer_1">
                        <path d="M1,8.259V9c0,15.767,8.366,30.655,21.835,38.853L25,49.17l2.165-1.318C40.634,39.655,49,24.767,49,9V8.259L25,0.955
                            L1,8.259z M26.126,46.145L25,46.83l-1.126-0.685C11.209,38.435,3.263,24.538,3.007,9.739L25,3.045l21.993,6.693
                            C46.737,24.538,38.791,38.435,26.126,46.145z"/>
                        <polygon points="15.707,25.293 14.293,26.707 22,34.414 41.707,14.707 40.293,13.293 22,31.586"/>
                    </g>
                </svg>
                <div class="infoCardText">
                    <p>100% Seguro</p>
                    <p>Certificado SSl</p>
                </div>
            </div>
        </section>

        <article class="about">
            <div class="aboutText">
                <p>Sobre</p>
                <p >
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em “Editar Texto” ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo espaço para você contar sua história.
                </p>
            </div>
        </article>
    </main>

    <footer>
        <div id="container">
            <div class="footerRow">
                <!-- Nav -->
                <nav class="footerNav">
                    <div class="footerTitle">
                        <h5>Loja</h5>
                    </div>
                    <div class="footerMenu">
                        <ul>
                            <li>
                                <a href="#">Sobre</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
                            </li>
                            <li>
                                <a href="#">Envio e Devoluções</a>
                            </li>
                            <li>
                                <a href="#">Política de Loja</a>
                            </li>
                            <li>
                                <a href="#">Métodos de pagamento</a>
                            </li>
                        </ul>
                    </div>  
                </nav>

                <!-- Safe and Payment method -->
                <section class="footerInfos">
                    <!-- Safe -->
                    <div class="footerTitle">
                        <h5>Segurança</h5>
                    </div>
                    <div class="footerImage">
                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                            <g id="Layer_1">
                                <path d="M1,8.259V9c0,15.767,8.366,30.655,21.835,38.853L25,49.17l2.165-1.318C40.634,39.655,49,24.767,49,9V8.259L25,0.955
                                    L1,8.259z M26.126,46.145L25,46.83l-1.126-0.685C11.209,38.435,3.263,24.538,3.007,9.739L25,3.045l21.993,6.693
                                    C46.737,24.538,38.791,38.435,26.126,46.145z"/>
                                <polygon points="15.707,25.293 14.293,26.707 22,34.414 41.707,14.707 40.293,13.293 22,31.586"/>
                            </g>
                            </svg>
                        </div>
                        <div>
                            <p>
                                Ambiente 100% Seguro. Sua Informação é Protegida Pela Criptografia SSL 256-Bit.
                            </p>
                        </div>
                    </div>
                    <!-- Payment -->
                    <div class="infosPayment">
                        <div class="footerTitle">
                            <h5>Métodos de pagamentos aceitos</h5>
                        </div>
                        <div>
                            <img src="/image/pagamentos-aceitos.webp" alt="Métodos de pagamentos aceitos">
                        </div>
                    </div>
                </section>

                <!-- Newsletter -->
                <section class="footerNewsletter">
                    <div class="footerTitle">
                        <h5>Junte-se à lista de e-mails e não perca as novidades</h5>
                    </div>
                    <div class="newsletterForm">
                        <form action="/form-data" method="post">
                            <label for="email">
                                Insira o seu e-mail aqui *
                            </label>
                            <input type="email" name="email" id="email">
                            <button type="submit">Assine Já</button>
                        </form>
                    <!-- </div> -->
                </section>
            </div>
        </div>
    </footer>
</body>
</html>

`;
};
