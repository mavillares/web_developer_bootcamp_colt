const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("YOUR FAKE DATA HERE");
      }
      reject("REQUEST ERROR");
    }, 1000);
  });
};

/*fakeRequest("/dogs/1")
  .then((data) => {
    console.log("DONE WITH REQUEST");
    console.log("data is:", data);
  })
  .catch((err) => {
    console.log("OH NO!", err);
  });*/

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

/*delayedColorChange("red", 1000)
    .then(() => delayedColorChange("orange", 1000))
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("blue", 1000))
    .then(() => delayedColorChange("indigo", 1000))
    .then(() => delayedColorChange("violet", 1000));*/

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE";
}

//rainbow().then(() => console.log("END OF RAINBOW"));
async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW");
}

printRainbow();

async function makeTwoRequest() {
  try {
    let data1 = await fakeRequest("/page1");
    let data2 = await fakeRequest("/page2");
    console.log(data1);
  } catch (e) {
    console.log("CAUGHT AN ERROR");
    console.log("error is:", e);
  }
}
