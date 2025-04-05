document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const buttons = document.querySelectorAll("nav button");
  const gameList = document.getElementById("game-list");

  // Lista de jogos
  const jogos = [
    { nome: "Jogo da Cobrinha", url: "https://playsnake.org/", categoria: "casual" },
    { nome: "2048", url: "https://play2048.co/", categoria: "puzzle" },
    { nome: "Stickman Hook", url: "https://stickmanhook.io/", categoria: "acao" },
    { nome: "Slope", url: "https://slopegame.com/", categoria: "corrida" },
    { nome: "Chess", url: "https://www.chess.com/play/computer", categoria: "estrategia" }
  ];

  function renderizarJogos(filtro = "", busca = "") {
    gameList.innerHTML = "";

    const jogosFiltrados = jogos.filter(jogo => {
      const nomeMatch = jogo.nome.toLowerCase().includes(busca.toLowerCase());
      const categoriaMatch = filtro === "all" || filtro === "" || jogo.categoria === filtro;
      return nomeMatch && categoriaMatch;
    });

    if (jogosFiltrados.length === 0) {
      gameList.innerHTML = "<p>Nenhum jogo encontrado 😢</p>";
      return;
    }

    jogosFiltrados.forEach(jogo => {
      const div = document.createElement("div");
      div.classList.add("game");
      div.innerHTML = `<a href="${jogo.url}" target="_blank">${jogo.nome}</a>`;
      gameList.appendChild(div);
    });
  }

  // Evento: busca por texto
  searchInput.addEventListener("input", () => {
    renderizarJogos(selecionado, searchInput.value);
  });

  // Evento: filtro por categoria
  let selecionado = "all";
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      selecionado = button.dataset.filter;
      renderizarJogos(selecionado, searchInput.value);
    });
  });

  // Mostrar todos os jogos ao iniciar
  renderizarJogos();
});
