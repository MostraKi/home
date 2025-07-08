export function renderHeader() {
  const headerHTML = `
    <header style="background-color: #ffffff; height: 60px; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); position: relative;">
      <div class="logo-container" style="display: flex; align-items: center;">
        <a href="/index.html" style="display: flex; align-items: center; text-decoration: none;">
          <img src="/logo.png" alt="Logo" style="height: 40px; margin-right: 10px;">
          <div class="logo" style="font-size: 1.5rem; font-weight: bold;">
            <span style="color: #008182;">Mostra</span><span style="color: #ec2c4a;">Ki</span>
          </div>
        </a>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <span id="authText" style="font-weight:bold; color:#15b0af; cursor:pointer; display:inline;" onclick="handleAuthAction()">Entrar</span>
        <div id="userCircle" class="user-circle" title="Perfil" onclick="window.location.href='/minha-conta.html'" style="background-color: #15b0af; color: white; font-weight: bold; border-radius: 50%; width: 32px; height: 32px; display: none; align-items: center; justify-content: center; margin-left: 10px; font-size: 0.8rem;"></div>
        <div class="menu-icon" onclick="toggleMenu()" style="font-size: 1.5rem; cursor: pointer;">&#9776;</div>
      </div>
      <div class="menu-list" id="menu" style="position: absolute; top: 60px; right: 20px; background-color: #ffe3c6; border: 2px solid black; border-radius: 6px; display: none; flex-direction: column; padding: 10px; z-index: 1000;">
        ${renderMenu()}
      </div>
    </header>
  `;
  document.getElementById("header").innerHTML = headerHTML;
}
