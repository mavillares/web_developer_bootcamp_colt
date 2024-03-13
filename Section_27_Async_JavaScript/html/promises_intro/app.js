const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is yor fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

/*fakeRequestCallback(
  "books.com/page1",
  function (response) {
    console.log("IT WORKS!!!");
    console.log(response);

    fakeRequestCallback(
      "books.com/page2",
      function (response) {
        console.log("IT WORKS AGAIN (2nd request)!!!");
        console.log(response);

        fakeRequestCallback(
          "books.com/page3",
          function (response) {
            console.log("IT WORKS (3rd req)!!!");
            console.log(response);
          },
          function (error) {
            console.log("ERROR (3rd req)!!!");
            console.log(error);
          }
        );
      },
      function (error) {
        console.log("ERROR (2nd req)!!!");
        console.log(error);
      }
    );
  },
  function (error) {
    console.log("ERROR!!!");
    console.log(error);
  }
);*/

fakeRequestPromise("google.com/page1")
  .then(() => {
    console.log("PROMISE RESOLVED!!");
    console.log("IT WORKED!!");
    fakeRequestPromise("google.com/page2")
      .then(() => {
        console.log("PROMISE RESOLVED (2)!!");
        console.log("IT WORKED!!");
        fakeRequestPromise("google.com/page3")
          .then(() => {
            console.log("PROMISE RESOLVED (3)!!");
            console.log("IT WORKED!!");
          })
          .catch(() => {
            console.log("PROMISE REJECTED (3)!!");
            console.log("OH NO ERROR!!");
          });
      })
      .catch(() => {
        console.log("PROMISE REJECTED (2)!!");
        console.log("OH NO ERROR!!");
      });
  })
  .catch(() => {
    console.log("PROMISE REJECTED!!");
    console.log("OH NO ERROR!!");
  });
