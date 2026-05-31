const cricketNews = [
  {
    category: "T20",
    headline: "India's Finisher Seals a Chaotic Final-Over Chase",
    description: "A calm unbeaten cameo turned a tense chase into a statement win as India held their nerve under lights.",
    date: "May 31, 2026",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "IPL",
    headline: "CSK Back Young Pace Core Before IPL 2026 Auction",
    description: "The Chennai camp is expected to retain its emerging quicks after a strong domestic white-ball season.",
    date: "May 30, 2026",
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "ODI",
    headline: "Pakistan Test New Opening Pair for Champions Trophy Cycle",
    description: "Selectors are looking at a left-right combination to improve powerplay scoring without losing stability.",
    date: "May 29, 2026",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Test",
    headline: "England Name Spin-Heavy Squad for Subcontinent Tour",
    description: "Three specialist spinners and two seam-bowling all-rounders headline England's latest red-ball plan.",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Women's Cricket",
    headline: "Mandhana Century Powers India to Series Lead",
    description: "A fluent hundred and sharp fielding display helped India dominate the second ODI from the first hour.",
    date: "May 27, 2026",
    image: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "ICC",
    headline: "ICC Announces New Window for Global Qualifiers",
    description: "The revised calendar gives associate nations more fixtures before the next major tournament cycle.",
    date: "May 26, 2026",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "IPL",
    headline: "RCB Analytics Unit Targets Middle-Overs Spin Problem",
    description: "The franchise is scouting wrist-spin options after struggling to control overs seven to fifteen.",
    date: "May 25, 2026",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "T20",
    headline: "Rashid Khan Returns With Four-Wicket Spell",
    description: "The leg-spinner found dip, pace variation, and trademark control in a decisive franchise league outing.",
    date: "May 24, 2026",
    image: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "ODI",
    headline: "New Zealand Build Around Williamson for 2027 Plan",
    description: "A measured rebuild puts experience at number three and aggressive all-rounders around the batting core.",
    date: "May 23, 2026",
    image: "https://images.unsplash.com/photo-1625401586060-f12be3d7cc57?auto=format&fit=crop&w=900&q=80"
  }
];

const points = [
  ["CSK", 14, 9, 5, "+0.812", 18],
  ["MI", 14, 8, 6, "+0.544", 16],
  ["RCB", 14, 8, 6, "+0.321", 16],
  ["KKR", 14, 7, 7, "+0.118", 14],
  ["SRH", 14, 7, 7, "+0.064", 14],
  ["GT", 14, 7, 7, "-0.092", 14],
  ["RR", 14, 6, 8, "-0.126", 12],
  ["DC", 14, 6, 8, "-0.311", 12],
  ["PBKS", 14, 5, 9, "-0.503", 10],
  ["LSG", 14, 5, 9, "-0.742", 10]
];

const predictions = [
  {
    match: "India vs Pakistan",
    teams: [["India", 55], ["Pakistan", 45]],
    players: "Virat Kohli, Shaheen Afridi, Jasprit Bumrah",
    pitch: "Firm surface with early seam and late batting value.",
    weather: "Clear evening, 26°C, light dew expected."
  },
  {
    match: "MI vs CSK",
    teams: [["MI", 51], ["CSK", 49]],
    players: "Suryakumar Yadav, Ruturaj Gaikwad, Matheesha Pathirana",
    pitch: "True bounce, short square boundaries reward timing.",
    weather: "Humid night, dew could help chasing side."
  },
  {
    match: "England vs South Africa",
    teams: [["England", 48], ["South Africa", 52]],
    players: "Jos Buttler, Kagiso Rabada, Aiden Markram",
    pitch: "Pace-friendly deck with carry for new-ball bowlers.",
    weather: "Cloudy spells, low rain risk."
  }
];

const rankings = {
  batsmen: ["Babar Azam", "Shubman Gill", "Rohit Sharma", "Travis Head", "Daryl Mitchell", "Virat Kohli", "Harry Brook", "Rassie van der Dussen", "David Warner", "Kane Williamson"],
  bowlers: ["Jasprit Bumrah", "Rashid Khan", "Shaheen Afridi", "Josh Hazlewood", "Kuldeep Yadav", "Kagiso Rabada", "Mitchell Starc", "Adam Zampa", "Mohammed Siraj", "Mark Wood"],
  allRounders: ["Ravindra Jadeja", "Shakib Al Hasan", "Hardik Pandya", "Glenn Maxwell", "Ben Stokes", "Sikandar Raza", "Wanindu Hasaranga", "Mitchell Marsh", "Marco Jansen", "Liam Livingstone"]
};

const playerImages = [
  "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
];

const newsGrid = document.querySelector("#newsGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
const pointsTable = document.querySelector("#pointsTable");
const predictionGrid = document.querySelector("#predictionGrid");
const rankingsList = document.querySelector("#rankingsList");
const menuToggle = document.querySelector("#menuToggle");
const navPanel = document.querySelector("#navPanel");
const scrollTop = document.querySelector("#scrollTop");

function renderNews(items) {
  newsGrid.innerHTML = items.map((item) => `
    <article class="news-card">
      <img src="${item.image}" alt="${item.headline}" loading="lazy">
      <div class="news-body">
        <span class="tag">${item.category}</span>
        <h3>${item.headline}</h3>
        <p>${item.description}</p>
        <span class="date">${item.date}</span>
        <button type="button">Read More</button>
      </div>
    </article>
  `).join("");
  emptyState.style.display = items.length ? "none" : "block";
}

function renderPoints() {
  pointsTable.innerHTML = points.map(([team, matches, wins, losses, nrr, pts]) => `
    <tr>
      <td><strong>${team}</strong></td>
      <td>${matches}</td>
      <td>${wins}</td>
      <td>${losses}</td>
      <td>${nrr}</td>
      <td><strong>${pts}</strong></td>
    </tr>
  `).join("");
}

function renderPredictions() {
  predictionGrid.innerHTML = predictions.map((item) => `
    <article class="prediction-card">
      <h3>${item.match}</h3>
      <div class="probability">
        ${item.teams.map(([team, value]) => `
          <div>
            <strong>${team} ${value}%</strong>
            <div class="bar"><span style="width:${value}%"></span></div>
          </div>
        `).join("")}
      </div>
      <p><strong>Key Players:</strong> ${item.players}</p>
      <p><strong>Pitch Report:</strong> ${item.pitch}</p>
      <p><strong>Weather:</strong> ${item.weather}</p>
    </article>
  `).join("");
}

function renderRankings(type = "batsmen") {
  rankingsList.innerHTML = rankings[type].map((name, index) => {
    const rating = 890 - index * 17;
    const image = playerImages[index % playerImages.length];
    return `
      <article class="ranking-row">
        <span class="rank">#${index + 1}</span>
        <img src="${image}" alt="${name}" loading="lazy">
        <strong>${name}</strong>
        <span class="rating">${rating} pts</span>
      </article>
    `;
  }).join("");
}

function animateCounters() {
  document.querySelectorAll(".counter").forEach((counter) => {
    const target = Number(counter.dataset.target);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 70));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 24);
  });
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const filtered = cricketNews.filter((item) =>
    `${item.category} ${item.headline} ${item.description}`.toLowerCase().includes(query)
  );
  renderNews(query ? filtered : cricketNews);
  document.querySelector("#latest-news").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderRankings(tab.dataset.rank);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navPanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("show", window.scrollY > 520);
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  alert("Thanks for subscribing to Spider News Cricket.");
});

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  alert("Message sent. Our cricket desk will get back to you soon.");
});

window.addEventListener("load", () => {
  document.querySelector("#loader").classList.add("hidden");
  animateCounters();
});

renderNews(cricketNews);
renderPoints();
renderPredictions();
renderRankings();
