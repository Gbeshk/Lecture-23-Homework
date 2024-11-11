let masivi1 = [1, 2, 3, 4, 5, 6];
let jami1 = masivi1.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(jami1);

let masivi2 = [1, 2, 3, 4, 5, 6];
let umaglesiricxi = masivi2.reduce((acc, cur) => {
  if (acc >= cur) {
    return acc;
  } else {
    return cur;
  }
}, 0);
console.log(umaglesiricxi);

let masivi3 = ["gamarjoba", "giorgi", "rogor", "xar"];
let gaertianebuli = masivi3.reduce((acc, cur) => {
  return acc + cur;
});
console.log(gaertianebuli);

let masivi4 = [10, 21, 2];
let namravli = masivi4.reduce((acc, cur) => {
  return acc * cur;
}, 1);
console.log(namravli);

let masivi5 = [100, 50];
let sxvaoba = masivi5.reduce((acc, cur) => {
  return acc - cur;
});
console.log(sxvaoba);

let masivi6 = [100, 50, 22, 13];
let changed6 = masivi6.map((number) => {
  return number * 2;
});
console.log(changed6);

let masivi7 = ["Gamarjoba", "VASHLI", "MSXALI"];
let changed7 = masivi7.map((number) => {
  return number.toLowerCase();
});
console.log(changed7);

let masivi8 = ["Gamarjoba", "VASHLI", "MSXALI"];
masivi8.map((number) => {
  let p = document.createElement("p");
  p.textContent = number;
  document.body.appendChild(p);
});

let masivi9 = [2, 12, 412, 33];
let changed9 = masivi9.map((number) => {
  return number * number;
});
console.log(changed9);

let masivi10 = ["marsi", "venera", "pluto"];
masivi10.forEach((number, index) => {
  let p = document.createElement("p");
  p.textContent = number;
  document.body.appendChild(p);
});

let masivi11 = [
  { saxeli: "giorgi", qula: 65 },
  { saxeli: "luka", qula: 63 },
  { saxeli: "beqa", qula: 55 },
  { saxeli: "nino", qula: 90 },
  { saxeli: "mari", qula: 92 },
];
masivi11.forEach((number, index) => {
  number.qula = number.qula + 5;
});
console.log(masivi11);

let masivi12 = [2, 12, 412, 33];
for (let index = masivi12.length - 1; index >= 0; index--) {
  console.log(masivi12[index]);
}

let masivi13 = ["Gamarjoba", "VASHLI", "MSXALI"];
for (let index = 0; index < masivi13.length; index++) {
  let div = document.createElement("div");
  div.textContent = masivi13[index];
  document.body.appendChild(div);
}

let masivi14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < masivi14.length; index++) {
  for (let i = 1; i < 11; i++) {
    console.log(`${masivi14[index]} * ${i} = ${i * masivi14[index]}`);
  }
}

let masivi15 = [20, 21, 22, 4, 2, 1];
let changed15 = masivi15.filter((number) => {
  return number > 10;
});
console.log(changed15);

let masivi16 = [];
for (let index = 0; index < 6; index++) {
  let div = document.createElement("div");
  masivi16.push(div);
}
masivi16[0].classList.add("box");
masivi16[2].classList.add("box");
masivi16[3].classList.add("box");
masivi16[4].classList.add("box");
let changed16 = masivi16.filter((number) => {
  return number.classList.contains("box");
});
console.log(changed16);
