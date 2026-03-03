const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  //   console.log(words);
  // 1. get container
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length == 0) {
    wordContainer.innerHTML = `
    <div class="lesson-select py-16 text-center bg-base-200 col-span-full space-y-4">
        <img class="mx-auto" src="./assets/alert-error.png" alt="" />
        <p class="mb-3">
          <span class="text-bangla text-lg text-gray-400">এই </span
          ><span class="text-lg text-gray-400">Lesson </span>
          <span class="text-bangla text-lg text-gray-400">এ এখনো কোন</span>
          <span class="text-lg text-gray-400">Vocabulary</span>
          <span class="text-bangla text-lg text-gray-400">যুক্ত করা হয়নি।</span>
        </p>
        <h2 class="font-bold">
          <span class="text-bangla text-5xl">নেক্সট </span
          ><span class="text-5xl">Lesson </span
          ><span class="text-bangla text-5xl">এ যান।</span>
        </h2>
      </div>
  
    `;
    return;
  }

  // 2. get each data
  words.forEach((word) => {
    // 3. create element
    const card = document.createElement("div");
    card.innerHTML = `
      <div id="" class="bg-white p-10 text-center space-y-6 rounded-xl shadow-md h-full">
        <h2 class="text-3xl font-bold">${word.word}</h2>
        <p class="text-lg">Meaning /Pronunciation</p>
        <h2 class="text-bangla text-3xl font-semibold text-[#18181B]">"${word.meaning} / ${word.pronunciation}"</h2>
        <div class="flex justify-between ">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
      </div>
    
    `;
    // 4. append to parent
    wordContainer.append(card);
  });
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
        <button onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
        </button>
`;
    // 4. append Child in parent
    levelContainer.append(btnDiv);
  });
};

loadLessons();
