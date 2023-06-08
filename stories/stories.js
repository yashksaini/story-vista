const storyBox = document.querySelector("#storyBox");
const storyCount = document.querySelector("#storyCount");
const relPath = "../images/story_covers/";
const type = ".png";
const totalStories = 11;
storyCount.innerHTML = `(${totalStories})`;

const displayStories = () => {
  let data = "";
  for (let i = 0; i < totalStories; i++) {
    data += `
            <div class="storyCard" style="transform: translateX(-20px);
            opacity: 0;animation: jumpIn 1.5s ${0.2 * i}s 1 forwards;">
              <a href="../story/?storyId=${i + 1}"
                ><img src="${relPath}${i + 1}${type}"
              /></a>
            </div>`;
  }
  storyBox.innerHTML = data;
};
displayStories();
