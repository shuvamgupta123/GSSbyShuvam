let teachers = {
    data: [
        {
            teachersName: "Durga Kafle",
            subject: "Nepali",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/Durga Kafle.jpeg",
        },
        {
            teachersName: "Alvin Ranger",
            subject: "English",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/Alvin Ranger.jpeg",
        },
        {
            teachersName: "T.N Chaudhary",
            subject: "Computer",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/TN.jpeg"
        },
        {
            teachersName: "Sauraj Pradhan",
            subject: "Mathematics",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/sauraj.jpeg"
        },
        {
            teachersName: "Deepak Paswan",
            subject: "English",
            title: "Teacher",
            image: "teacher/Deepak Paswan.jpeg"
        },
        {
            teachersName: "Lalit Karn",
            subject: "Science",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/lalit.jpeg"
        },
        {
            teachersName: "Deepak Chaudhary",
            subject: "O.Mathematics",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/deepak.jpeg"
        },
        {
            teachersName: "Laxnika Jha",
            subject: "Nepali",
            title: "Teacher",
            image: "teacher/laxnika.jpeg"
        },
        {
            teachersName: "Rakesh Sharma",
            subject: "H.P.E",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/sharma.jpeg",
        },
        {
            teachersName: "Mamta Shrestha",
            subject: "Nepali",
            title: "Teacher",
            image: "teacher/mamta.jpeg",
        },
        {
            teachersName: "Kritish Shah",
            subject: "H.P.E",
            title: "Teacher",
            image: "teacher/kri.jpeg"
        },
        {
            teachersName: "Komal Karn",
            subject: "Science",
            title: "Teacher",
            image: "teacher/komal.jpeg"
        },
        {
            teachersName: "Sunny Paswan",
            subject: "Mathematics",
            title: "Teacher",
            image: "teacher/sunny.jpeg"
        },
        {
            teachersName: "Sabita Tiwari",
            subject: "Social Studies",
            title: "Teacher",
            image: "teacher/sab.jpeg"
        },
        {
            teachersName: "Vedanand Thakur",
            subject: "O.Mathematics",
            title: "Teacher",
            image: "teacher/Ved.jpeg",
        },
        {
            teachersName: "Vickey Chaurasiya",
            subject: "Science",
            title: "Teacher",
            image: "teacher/vicky.jpeg"
        },
        {
            teachersName: "Priyal Humangi",
            subject: "Social Studies",
            title: "Teacher",
            image: "teacher/priyal.jpeg"
        },
        {
            teachersName: "Mansur Alam",
            subject: "Mathematics",
            title: "Teacher",
            image: "teacher/man.jpeg"
        },
        {
            teachersName: "Dinesh Chhetri",
            subject: "Social Studies",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/dinesh.jpeg"
        },
        {
            teachersName: "Shamsher Ali",
            subject: "Computer",
            title: "Teacher",
            image: "teacher/samsher.jpeg"
        },
        {
            teachersName: "Rohit Shah",
            subject: "Accountancy",
            title: "Teacher",
            image: "teacher/Rohit.jpeg"
        },
        {
            teachersName: "Ganesh Chhetri",
            subject: "Mathematics",
            subject: "H.O.D",
            title: "H.O.D",
            image: "teacher/chetri.jpeg"
        },
        {
            teachersName: "Rinku Shah",
            subject: "Accountancy",
            title: "Teacher",
            image: "teacher/rin.jpg"
        },{
            teachersName: "Durga Kafle",
            subject: "Nepali",
            title: "H.O.D",
            image: "teacher/Durga Kafle.jpeg",
        },
        {
            teachersName: "Alvin Ranger",
            subject: "English",
            title: "H.O.D",
            image: "teacher/Alvin Ranger.jpeg",
        },
        {
            teachersName: "T.N Chaudhary",
            subject: "Computer",
            title: "H.O.D",
            image: "teacher/TN.jpeg"
        },
        {
            teachersName: "Sauraj Pradhan",
            subject: "Mathematics",
            title: "H.O.D",
            image: "teacher/sauraj.jpeg"
        },
        {
            teachersName: "Lalit Karn",
            subject: "Science",
            title: "H.O.D",
            image: "teacher/lalit.jpeg"
        },
        {
            teachersName: "Deepak Chaudhary",
            subject: "O.Mathematics",
            title: "H.O.D",
            image: "teacher/deepak.jpeg"
        },

        {
            teachersName: "Rakesh Sharma",
            subject: "H.P.E",
            title: "H.O.D",
            image: "teacher/sharma.jpeg",
        },

        {
            teachersName: "Dinesh Chhetri",
            subject: "Social Studies",
            title: "H.O.D",
            image: "teacher/dinesh.jpeg"
        },

        {
            teachersName: "Ganesh Chhetri",
            subject: "Mathematics",
            title: "H.O.D",
            image: "teacher/chetri.jpeg"
        },
    ],
};

for (let i of teachers.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.subject.toLowerCase().replace(/\s+/g, '-'), "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("teacher-name");
    name.innerText = i.teachersName.toUpperCase();
    container.appendChild(name);

    let subject = document.createElement("h6");
    subject.innerText = i.subject;
    container.appendChild(subject);

    card.appendChild(container);
    document.getElementById("teachers").appendChild(card);
}

function filterSubject(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value.toLowerCase().replace(/\s+/g, '-'))) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        const teacherName = element.querySelector(".teacher-name").innerText.toLowerCase();
        const subject = element.querySelector("h6").innerText.toLowerCase();
        if (teacherName.includes(searchValue) || subject.includes(searchValue)) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
});

window.onload = () => {
    filterSubject("all");
};
