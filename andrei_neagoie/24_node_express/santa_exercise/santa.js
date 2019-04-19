const fs = require("fs");

//RETURNS FLOOR SANTA ENDS ON:

function question1() {
  fs.readFile("./floors.txt", (err, data) => {
    console.time("challenge");
    let floor = 0;
    const floors = data.toString();
    if (err) {
      console.log("error");
    } else {
      for (let i = 0; i < floors.length; i++) {
        if (floors[i] === "(") {
          floor++;
        } else if (floors[i] === ")") {
          floor--;
        }
      }
      console.timeEnd("challenge");
      console.log(floor);
    }
  });
}

//ANDREI'S ANSWER TO QUESTION 1:

function andreiQ1() {
  fs.readFile("./floors.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("santa-time");
    console.log("floor:", answer);
  });
}

//RETURNS FIRST TIME INTO BASEMENT:

function question2() {
  fs.readFile("./floors.txt", (err, data) => {
    console.time("challenge2");
    let floor = 0;
    const floors = data.toString();
    if (err) {
      console.log("error");
    } else {
      for (let i = 0; i < floors.length; i++) {
        if (floor === -1) {
          console.log(i);
          break;
        } else if (floors[i] === "(") {
          floor++;
        } else if (floors[i] === ")") {
          floor--;
        }
      }
    }
    console.timeEnd("challenge2");
  });
}

//ANDREI'S ANSWER TO QUESTION 2:

function andreiQ2() {
  fs.readFile("./floors.txt", (err, data) => {
    console.time("santa-time2");
    const directions = data.toString();
    const directionsArray = directions.split("");
    let acc = 0;
    let counter = 0;
    const answer = directionsArray.some(currentItem => {
      if (currentItem === "(") {
        acc += 1;
      } else if (currentItem === ")") {
        acc -= 1;
      }
      counter++;
      return acc < 0;
    });
    console.timeEnd("santa-time2");
    console.log("basement entered at: ", counter);
  });
}

question1();
question2();
andreiQ1();
andreiQ2();
