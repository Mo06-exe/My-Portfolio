const buttons = document.querySelectorAll(".card-button");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

// Optional: detailed descriptions per skill
const skillInfo = {
  HTML: "HTML is used to structure web pages with clean, semantic markup. I focus on building well organized layouts that are accessible and easy to style and maintain.",
  CSS: "Used to design responsive and visially appealing interfaces. Comfortable with layouts, positioning, animations, and modern styling techniques",
  JavaScript: "Used to add interactivity and dynamic behavior to web pages, including DOM manipulation, event handling, and basic client-side logic.",
  Python: "Used for scripting, problem-solving, and data analysis. Familiar with libraries such as pandas, numpy and applying Python to real-world computational tasks.",
  "C++": "Used to understand core programming concepts such as memory management, data structures, and performance-oriented problem solving.",
  JAVA: "Primarily used for object-oriented programming and Android application development, with a strong focus on clean code and logical design.",
  SQL: "Used to design and query relational databases, write structured queries, and manage application data efficiently.",
  "Android Studio": "Used as the main development environment for building Android applications, including UI design, app logic, and debugging."
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const title = card.querySelector(".text-title").textContent;

    modalTitle.textContent = title;
    modalContent.textContent = skillInfo[title] || "More information coming soon.";

    modal.classList.add("active");
    overlay.classList.add("active");
  });
});

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
