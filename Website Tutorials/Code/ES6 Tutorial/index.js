const personalInformation = {
    firstName: "Joseph",
    lastName: "Arakelian",
    city: "Reston",
    state: "Virginia",
    zipCode: 20191
};

const {firstName : fn, lastName : ln} = personalInformation;

document.getElementById('example').innerText = `${fn} ${ln}`;

/*
let work1 = "Joseph";
let work2 = "Arakelian";

const fullName = `${work1} ${work2}`;

document.getElementById('example').innerText = fullName;
*/