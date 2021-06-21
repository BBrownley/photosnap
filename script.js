const mobileMenuHandler = (() => {
  const menuIcon = document.querySelector(".header .menu-icon");
  const menu = document.querySelector(".mobile-menu");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("opened");
    menu.classList.toggle("opened");
  });
})();

const storyRenderer = (() => {
  const stories = [
    {
      date: "April 16th 2021",
      title: "The Mountains",
      author: "John Appleseed",
      cssClassName: "the-mountains"
    },
    {
      date: "April 14th 2021",
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      cssClassName: "cityscapes"
    },
    {
      date: "April 11th 2021",
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      cssClassName: "voyage"
    },
    {
      date: "April 9th 2021",
      title: "Architecturals",
      author: "Samantha Brooke",
      cssClassName: "architecturals"
    },
    {
      date: "April 7th 2021",
      title: "World Tour 2019",
      author: "Timothy Wagner",
      cssClassName: "world-tour"
    },
    {
      date: "April 3rd 2021",
      title: "Unforseen Corners",
      author: "William Malcolm",
      cssClassName: "unforeseen-corners"
    },
    {
      date: "March 29th 2021",
      title: "King on Africa: Part II",
      author: "Tim Hillenburg",
      cssClassName: "king-on-africa"
    },
    {
      date: "Martch 21st 2021",
      title: "The Trip to Nowhere",
      author: "Felicia Rourke",
      cssClassName: "trip-to-nowhere"
    },
    {
      date: "March 19th 2021",
      title: "Rage of The Sea",
      author: "Mohammed Abdul",
      cssClassName: "rage-of-the-sea"
    },
    {
      date: "March 16th 2021",
      title: "Running Free",
      author: "Michelle",
      cssClassName: "running-free"
    },
    {
      date: "March 11th 2021",
      title: "Behind the Waves",
      author: "Lamarr Wilson",
      cssClassName: "behind-the-waves"
    },
    {
      date: "March 9th 2021",
      title: "Calm Waters",
      author: "Samantha Brooke",
      cssClassName: "calm-waters"
    },
    {
      date: "March 5th 2021",
      title: "The Milky Way",
      author: "Benjamin Cruz",
      cssClassName: "milky-way"
    },
    {
      date: "March 4th 2021",
      title: "Night at The Dark Forest",
      author: "Mohammed Abdul",
      cssClassName: "dark-forest"
    },
    {
      date: "March 1st 2021",
      title: "Somwarpet’s Beauty",
      author: "Michelle",
      cssClassName: "somwarpet"
    },
    {
      date: "February 25th 2021",
      title: "Land of Dreams",
      author: "William Malcolm",
      cssClassName: "land-of-dreams"
    }
  ];

  const storyContainer = document.querySelector(
    ".main-stories .stories-container"
  );

  stories.forEach(story => {
    const storyElWrapper = document.createElement("div");
    storyElWrapper.classList.add("story-wrapper", story.cssClassName);
    storyElWrapper.innerHTML = `
      <div class="story">
        <p class="story-date">${story.date}</p>
        <h3>${story.title}</h3>
        <p>by ${story.author}</p>
        <button class="btn-4">
          <span>Read story</span
          ><img
            src="./assets/shared/desktop/arrow.svg"
            class="svg-arrow"
          />
        </button>
      </div>
      <div class="accent-border"></div>
    `;

    // const storyEl = `
    //   <div class="story-wrapper ${story.cssClassName}">
    //     <div class="story">
    //       <p>${story.date}</p>
    //       <h3>${story.title}</h3>
    //       <p>by ${story.author}</p>
    //       <button class="btn-4">
    //         <span>Read story</span
    //         ><img
    //           src="./assets/shared/desktop/arrow.svg"
    //           class="svg-arrow"
    //         />
    //       </button>
    //     </div>
    //     <div class="accent-border"></div>
    //   </div>
    // `;

    storyContainer.appendChild(storyElWrapper);
  });
})();

{
  /* <div class="story-wrapper the-mountains">
<div class="story">
  <h3>The Mountains</h3>
  <p>by John Appleseed</p>
  <button class="btn-4">
    <span>Read story</span
    ><img
      src="./assets/shared/desktop/arrow.svg"
      class="svg-arrow"
    />
  </button>
</div>
<div class="accent-border"></div>
</div>  */
}
