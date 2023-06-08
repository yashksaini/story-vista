const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get("storyId");
const story_title = document.querySelector("#story_title");
const story_content = document.querySelector("#story_content");
const story_name = document.querySelector("#story_name");
const searchInput = document.querySelector("#searchInput");
const searchCount = document.querySelector("#searchCount");
let storyData = "";
let originalData = "";
let searchResultCount = 0;

const displayFileContent = (id, storyContent) => {
  story_title.innerHTML = `
    <h1>${stories[id - 1].title}</h1>`;
  story_name.innerHTML = stories[id - 1].title;
  document.title = `${stories[id - 1].title} | StoryVista | Yash Kumar Saini`;
  story_content.innerHTML = storyContent.replace(/\n/g, "<p></p>");
};

if (paramValue > 0 && paramValue < 12) {
  originalData = stories[paramValue - 1].story;
  storyData = stories[paramValue - 1].story;
  displayFileContent(paramValue, storyData);
} else {
  window.location.href = "/";
}

searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value;
  if (keyword.length > 0) {
    storyData = originalData.split(keyword).join(`<b>${keyword}</b>`);
    searchResultCount = originalData.split(keyword).length;
    searchCount.innerHTML = `${searchResultCount - 1} results found`;
    displayFileContent(paramValue, storyData);
  } else {
    searchCount.innerHTML = ``;
    displayFileContent(paramValue, originalData);
  }
});

const fontSizeChange = (type) => {
  const maxFontValue = 44;
  const minFontValue = 18;
  const prevFontSize = window
    .getComputedStyle(story_content, null)
    .getPropertyValue("font-size");
  const prevFontValue = parseFloat(prevFontSize);

  // Increase the font size
  if (type === 1 && prevFontValue < maxFontValue) {
    story_content.style.fontSize = `${prevFontValue + 2}px`;
    story_content.style.lineHeight = `${(prevFontValue + 2) * 1.8}px`;
  } else if (type === 0 && prevFontValue > minFontValue) {
    story_content.style.fontSize = `${prevFontValue - 2}px`;
    story_content.style.lineHeight = `${(prevFontValue - 2) * 1.8}px`;
  }
};

const lineHeightChange = (type) => {
  const maxLineHeight = 2.2;
  const minLineHeight = 1.5;
  const fontSize = window
    .getComputedStyle(story_content, null)
    .getPropertyValue("font-size");
  const fontValue = parseFloat(fontSize);
  const lineHeight = window
    .getComputedStyle(story_content, null)
    .getPropertyValue("line-height");
  const lineValue = parseFloat(lineHeight);
  const ratio = lineValue / fontValue;
  // Increase the line-height
  if (type === 1 && ratio < maxLineHeight) {
    story_content.style.lineHeight = `${(ratio + 0.1) * fontValue}px`;
  } else if (type === 0 && ratio > minLineHeight) {
    story_content.style.lineHeight = `${(ratio - 0.1) * fontValue}px`;
  }
};
const bookmark = document.querySelector("#bookmark");
const bookmark1 = document.querySelector("#bookmark1");
let savedStories = JSON.parse(localStorage.getItem("saved")) || [];
const bookmarkStory = () => {
  if (savedStories.indexOf(paramValue) === -1) {
    savedStories.push(paramValue);
    localStorage.setItem("saved", JSON.stringify(savedStories));
    bookmark.className = "infoBox saved";
    bookmark1.className = "cog-item saved";
  } else {
    savedStories.splice(savedStories.indexOf(paramValue), 1);
    localStorage.setItem("saved", JSON.stringify(savedStories));
    bookmark.className = "infoBox";
    bookmark1.className = "cog-item ";
  }
};

const bookMarkCheck = () => {
  if (savedStories.indexOf(paramValue) !== -1) {
    bookmark1.className = "cog-item saved";
    bookmark.className = "infoBox saved";
  }
};
bookMarkCheck();

let continueReadings = JSON.parse(localStorage.getItem("continue")) || [];
let completedReadings = JSON.parse(localStorage.getItem("completed")) || [];
const setContinueReading = () => {
  if (
    continueReadings.indexOf(paramValue) === -1 &&
    completedReadings.indexOf(paramValue) === -1
  ) {
    continueReadings.push(paramValue);
    localStorage.setItem("continue", JSON.stringify(continueReadings));
  }
};
setContinueReading();
const complete = document.querySelector("#complete");
const markAsRead = () => {
  if (completedReadings.indexOf(paramValue) === -1) {
    completedReadings.push(paramValue);
    localStorage.setItem("completed", JSON.stringify(completedReadings));
    continueReadings.splice(continueReadings.indexOf(paramValue), 1);
    localStorage.setItem("continue", JSON.stringify(continueReadings));
    complete.className = "infoBox saved";
  } else {
    completedReadings.splice(completedReadings.indexOf(paramValue), 1);
    localStorage.setItem("completed", JSON.stringify(completedReadings));
    continueReadings.push(paramValue);
    localStorage.setItem("continue", JSON.stringify(continueReadings));
    complete.className = "infoBox";
  }
};

const checkMarkAsRead = () => {
  if (completedReadings.indexOf(paramValue) === -1) {
    complete.className = "infoBox ";
  } else {
    complete.className = "infoBox saved";
  }
};
checkMarkAsRead();
