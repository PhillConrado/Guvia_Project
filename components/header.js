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
         <!-- hamburger menu -->
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
                 <button class="btn" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Login</button>
                               
                 </li>
             </ul>
         </div>
     </div>
    </nav>

    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">Possui uma conta? Faça seu login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group container  ">
              <label for="inputEmail3">Email</label>
              <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu email">
            </div>
            <div class="form-group container ">
              <label for="inputPassword3">Senha</label>
              <input type="password" class="form-control" id="inputPassword3" placeholder="Digite sua Senha">
              <a href="#">
                <p class="text-right ">Esqueci minha senha</p>
              </a>
            </div>
            <div class="form-group container">
              <button type="button" class="btn btn-primary  btn-lg btn-block">Entrar</button>
            </div>
            <a href="cadastro.html" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
              <p class="text-center">Não possuiu um conta? Cadastre-se</p>
            </a>
            <div class="text-center">
              <a href="" class="ml-2"><img class="logofacebook" src="./img/icon_facebook.png"
                  alt="logo do facebook"></a>
              <a href="" class="ml-3"><img src="./img/icon_google.png" alt="logo do google"></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">Cadastre-se</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="">
          <form id="register-form" action="">
            <div class="label_cadast email">
              <label for="email">E-mail</label>
              <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="2"
                data-email-validate>
            </div>
            <div class="label_cadast nome">
              <label for="name">Nome</label>
              <input type="text" name="name" id="name" placeholder="Digite seu nome" data-required data-min-length="3"
                data-max-length="16">
            </div>
            <div class="label_cadast">
              <label for="lastname">Sobrenome</label>
              <input type="text" name="lastname" id="lastname" placeholder="Digite seu sobrenome" data-required
                data-only-letters>
            </div>
            <div class="label_cadast">
              <label for="lastname">Senha</label>
              <input type="password" name="password" id="password" placeholder="Digite sua senha" data-password-validate
                data-required>
            </div>
            <div class="label_cadast">
              <label for="passconfirmation">Confirmação de senha</label>
              <input type="password" name="passconfirmation" id="passwordconfirmation"
                placeholder="Digite novamente sua senha" data-equal="password">
            </div>
            <div class="termos">
              <input type="checkbox" name="agreement" id="agreement">
              <label for="agreement" id="agreement-label">Eu li e aceito os <a href="#">termos de uso</a></label>
              <div class="registre">
                <button type="submit" class=" btn btn-primary">Registrar</button>
                <!-- <input id="btn-submit" type="submit" value="Registrar"> -->
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <a data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Voltar para o Login</a>
        </div>
      </div>
    </div>
  </div>
    `;
    }
}

customElements.define('header-component', Header);