const fetchBtn = document.getElementById("fetchBtn");
const reloadBtn = document.getElementById("reloadBtn");
const loadingText = document.getElementById("loadingText");
const outputContainer = document.getElementById("output");

const fetchFunction = async () => {
  loadingText.classList.remove("hidden");
  showSkeletons();

  outputContainer.innerHTML = " ";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("data:-", data);
    loadingText.classList.add("hidden");
    renderCards(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    outputContainer.innerHTML = "<p>Failed to load data</p>";
    loadingText.classList.add("hidden");
  }
};

fetchBtn.addEventListener("click", () => {
  fetchFunction();
});
reloadBtn.addEventListener("click", () => {
  fetchFunction();
});

const renderCards = (users) => {
  const carContainer = document.getElementById("output");

  users.slice(0, 5).forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("skeleton");
    card.innerHTML = `
        <h3>${user.name}</h3> 
        <p>${user.email}</p>
        <p>${user.phone}</p>`;

    carContainer.appendChild(card);
  });
};

const showSkeletons = () => {
  for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="skeleton" style="width: 80%"></div>
      <div class="skeleton" style="width: 60%"></div>
      <div class="skeleton" style="width: 90%"></div>
    `;
    outputContainer.appendChild(card);
  }
};

showSkeletons();
