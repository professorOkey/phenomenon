const burger = document.querySelector(".icon-menu");
burger.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  renderBurgerMenu();
});

function renderBurgerMenu() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<section class="menu__screen"> 
      <div class="menu__body">      
        <div class="menu__close"></div>        
          <div class="menu__list">        
            <a href="">About</a>
            <a href="">How it works</a>
            <a href="">Blog</a>
            <button class="btn btn__white btn__white__log">
              <div>
                <img src="./img/buttons/user.svg" alt="User" />
              </div>
            </button>             
          </div>
        </div>    
    </section>`
  );
  const menuScreen = document.querySelector(".menu__screen");
  menuScreen.style.top = `${window.pageYOffset}px`;
  menuScreen.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("menu__screen") ||
      event.target.classList.contains("menu__close")
    ) {
      menuScreen.remove();
      document.body.classList.remove("menu-open");
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      menuScreen.remove();
      document.body.classList.remove("menu-open");
    }
  });
}
