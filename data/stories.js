const stories = [
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2022/09/Dosnoventa_Maharishi-1500x755-1.jpg",
        title: "DOSNOVENTA®<br>THE UNSEEN PATH™",
        date: "JANUARY 2025",
        description: "A LIMITED EDITION OF THE DOSNOVENTA® FULL-CARBON TOKYO FRAME"
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2021/12/Dosnoventa_Mario_Cover.png",
        title: "DOSNOVENTA®<br>YOKOHAMA DOG DAYS",
        date: "NOVEMBER 2024",
        description: "IDLE DAYS AROUND YOKOHAMA, CAPTURED THROUGH THE LENS OF LUCAS MONNE."
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2021/05/Dosnoventa_Paris_00-1-scaled-1500x754_Cover_2.jpg",
        title: "NINEPOINTNINE<br>X DOSNOVENTA®",
        date: "APRIL 2024",
        description: ""
    },
    {
        image: "https://i.ibb.co/1fXqFcBy/BIKINGGEO.jpg",
        title: "CERVELO®<br>RED AERO™",
        date: "FEBRUARY 2023",
        description: "A PIC OF GEO ALGUSAR RIDING A BIKE IN DGT."
    }
];

function loadStories() {
    const storiesContainer = document.getElementById("stories-list");
    storiesContainer.innerHTML = "";

    stories.forEach(story => {
        const storyCard = document.createElement("div");
        storyCard.classList.add("story-card");

        storyCard.innerHTML = `
            <img src="${story.image}" alt="${story.title}">
            <div class="story-text">
                <h3>${story.title}</h3>
                <p>${story.date}</p>
                ${story.description ? `<p>${story.description}</p>` : ""}
            </div>
        `;

        storiesContainer.appendChild(storyCard);
    });
}

document.addEventListener("DOMContentLoaded", loadStories);
