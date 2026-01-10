// function getPromise() {
//   return new Promise((resolve, reject) => {
//     // setTimeout(()=>{
//     //     resolve("good~~!!");
//     // }, 2000);

//     setTimeout(() => {
//       reject("bad~~!!");
//     }, 2000);
//   });
// }

// const promise = getPromise();

function getUserName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Bob");
    }, 2000);
  });
}

function getCity(userName) {
  return new Promise((resolve) => {
    if (userName === "Alice") {
      resolve("New York");
    } else if (userName === "Bob") {
      resolve("LA");
    } else {
      resolve("Unknown");
    }
  }, 2000);
}

// getUserName()
//   .then((userName) => {
//     console.log(userName);
//     return getCity(userName);
//   })
//   .then((city) => {
//     console.log(city);
//   });

// Async / Await

async function runAsyncTask() {
    const userName = await getUserName();

    console.log(userName);

    const city = await getCity(userName);

    console.log(city);
}

runAsyncTask();