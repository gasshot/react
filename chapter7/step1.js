// function runTask2(callback) {
//   setTimeout(() => {
//       console.log("Task 2");
//       callback();
//   }, 2000);

// }

// console.log("Task 1");
// runTask2(() => {
//   console.log("Task 3");
// });

function getUserName(callback) {
  setTimeout(() => {
    callback("Bob");
  }, 2000);
}

function getCity(userName, callback) {
  setTimeout(() => {
    let city = "Unknown";

    if (userName === "Alice") {
      city = "New York";
    } else if (userName === "Bob") {
      city = "LA";
    }
    return callback(city);
  }, 2000);
}

getUserName((userName) => {
  console.log(`1. ${userName}`);
  getCity(userName, (city) => {
    console.log(`2. ${city}`);
  });
});
