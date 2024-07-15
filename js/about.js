// ---------------------------- abouts

const ul = document.querySelector('.skill-list');

const experienceList = [
    "Degree in Digital & UX/UI Design", 
    "Master's Degree in Web Design & Development", 
    "3D Artist & Designer at Prexez", 
    "Content Creator at World Expo Korea", 
    "Freelance artist"
];


experienceList.forEach((experienceList) => {
    let li = document.createElement("li");
    li.classList.add("skill-element");
    ul.appendChild(li);
    li.innerText = experienceList;
    // console.log(experienceList);
});