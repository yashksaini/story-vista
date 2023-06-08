let savedStories = JSON.parse(localStorage.getItem("saved")) || [];

const storyBox = document.querySelector("#storyBox");
const storyCount = document.querySelector("#storyCount");
const relPath = "../images/story_covers/";
const type = ".png";
storyCount.innerHTML = `(${savedStories.length})`;

const displayStories = () => {
  if (savedStories.length > 0) {
    let data = "";
    for (let i = 0; i < savedStories.length; i++) {
      data += `
                  <div class="storyCard" style="transform: translateX(-20px);
                  opacity: 0;animation: jumpIn 1.5s ${0.2 * i}s 1 forwards;">
                    <a href="../story/?storyId=${savedStories[i]}"
                      ><img src="${relPath}${savedStories[i]}${type}"
                    /></a>
                  </div>`;
    }
    storyBox.innerHTML = data;
  }
};
displayStories();
