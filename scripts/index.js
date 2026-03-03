const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};

const displayLessons = (lessons) => {
  console.log(lessons);

  // 1. get the element & make empty
  const levelContainer = document.getElementById("level-container");

  levelContainer.innerHTML = "";

  // 2. get into every lesson
  const lesson = lessons.forEach((lesson) => {
    // 3. create element
    const btnDiv = document.createElement("Div");
    btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
        </button>`;
    // 4. append Child in parent
    levelContainer.appendChild(btnDiv);
  });
};

loadLessons();
