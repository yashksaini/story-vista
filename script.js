const recent_stories = document.querySelector("#recent_stories");
const totalStories = 11;
const relPath = "images/story_covers/";
const type = ".png";
const displayStories = () => {
  let data = "";
  let count = 0;
  for (let i = totalStories - 1; i > totalStories - 5; i--) {
    count++;
    data += `
              <div class="storyCard" style="transform: translateX(-20px);
              opacity: 0;animation: jumpIn 1.5s ${0.2 * count}s 1 forwards;">
                <a href="./story/?storyId=${i + 1}"
                  ><img src="${relPath}${i + 1}${type}"
                /></a>
              </div>`;
  }
  recent_stories.innerHTML = data;
};
displayStories();
const continueReadings = JSON.parse(localStorage.getItem("continue")) || [];
const completedReadings = JSON.parse(localStorage.getItem("completed")) || [];
const continue_stories = document.querySelector("#continue_stories");
const completed_stories = document.querySelector("#completed_stories");
const displayContineStories = () => {
  if (continueReadings.length > 0) {
    let data = "";
    for (let i = 0; i < continueReadings.length; i++) {
      data += `
                <div class="storyCard" style="transform: translateX(-20px);
                opacity: 0;animation: jumpIn 1.5s ${0.2 * i}s 1 forwards;">
                  <a href="./story/?storyId=${continueReadings[i]}"
                    ><img src="${relPath}${continueReadings[i]}${type}"
                  /></a>
                </div>`;
    }
    continue_stories.innerHTML = data;
  }
};
displayContineStories();

const displayCompletedStories = () => {
  if (completedReadings.length > 0) {
    let data = "";
    for (let i = 0; i < completedReadings.length; i++) {
      data += `
                <div class="storyCard" style="transform: translateX(-20px);
                opacity: 0;animation: jumpIn 1.5s ${0.2 * i}s 1 forwards;">
                  <a href="./story/?storyId=${completedReadings[i]}"
                    ><img src="${relPath}${completedReadings[i]}${type}"
                  /></a>
                </div>`;
    }
    completed_stories.innerHTML = data;
  }
};
displayCompletedStories();
