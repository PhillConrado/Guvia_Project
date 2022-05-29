class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <!-- Menu    -->
    <nav id="menu" class="navbar navbar-expand-lg fixed-top main_color p-0">
     <div class="container">

         <a class="navbar-brand guvia" href="index.html"><img class="logo_menu" src="./img/minilogo.png"
                 alt="">Guvia</a>
         <!-- botão tela menor -->
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
             aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-dark navbar-collapse" id="navbarResponsive">
             <ul class="navbar-nav ms-auto">
                 <li class="nav-item">
                     <a class="nav-link " href="index.html">Home</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="hospedagem.html">Hospedagem</a>
                 </li>
                 <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                         data-bs-toggle="dropdown" aria-expanded="false">
                         O que fazer
                     </a>
                     <ul class="dropdown-menu main_color" aria-labelledby="navbarDropdown">
                         <li><a class="dropdown-item p-2" href="gastronomia.html">Gastronomia</a></li>
                         <li><a class="dropdown-item p-2" href="#">História</a></li>
                         <li><a class="dropdown-item p-2" href="#">Cultura</a></li>
                         <li><a class="dropdown-item p-2" href="parques.html">Parques</a></li>
                         <li><a class="dropdown-item p-2" href="vidanoturna.html">Vida Noturna</a></li>
                         <li><a class="dropdown-item p-2" href="#">Entretenimento</a></li>
                     </ul>
                 </li>
                 <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                         data-bs-toggle="dropdown" aria-expanded="false">
                         Guviers
                     </a>
                     <ul class="dropdown-menu main_color" aria-labelledby="navbarDropdown">
                         <li><a class="dropdown-item p-2" href="forum.html">Acesse o fórum</a></li>
                         <li><a class="dropdown-item p-2" href="#">Postagens recentes</a></li>
                         <li><a class="dropdown-item p-2" href="#">Promoções</a></li>
                         <li><a class="dropdown-item p-2" href="#">Seja um Guvier</a></li>
                     </ul>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="aluguel_veiculos.html">Alugue um carro</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">Dicas úteis</a>
                 </li>
                 <li class="nav-item bg-info bg-opacity-10 border-info border-start-0 rounded">
                     <a class="nav-link" href="#">Faça seu login</a>
                 </li>
             </ul>
         </div>
     </div>
    </nav>
    `;
    }
}

customElements.define('header-component', Header);