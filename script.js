const API_URL = "http://localhost:3000/api/posts";
const BASE_URL = "http://localhost:3000/";

const getPosts = () => {
    fetch(API_URL, {
        method: "GET"
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        return showData(data);
    })
}

getPosts();


const showData = (data) => {
    let dataDiv = "";
    data.forEach((datum) => {
        const userName = datum.name;
        console.log(userName);
        const userGender = datum.gender;
        const userPlace = datum.place;
        dataDiv += `
        <div>
        <h1>${userName}</h1>
        </div>
        <div>
            <p>${userGender[0].toUpperCase()+userGender.slice(1)}</p>
        </div>
        <div>
            <p>${userPlace[0].toUpperCase()+userPlace.slice(1)}</p>
        </div>`
    });
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = dataDiv;
}