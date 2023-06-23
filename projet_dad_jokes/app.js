// on sélectionne le bouton et le result

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// on importe les données API avec fetch
const url = "https://icanhazdadjoke.com/";

const fetchDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    // on vérifie le statut
    if (!response.ok) {
      throw new Error("Whoops!");
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    console.log(error);
    result.textContent = "There was an error...";
  }
};

// on écoute l'évènement click sur le boutton
btn.addEventListener("click", (e) => {
  fetchDadJoke(e);
});

// rechargement de la page
window.addEventListener("DOMContentLoaded", (e) => {
  fetchDadJoke(e);
});
