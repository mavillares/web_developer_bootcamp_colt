/*async function hello (){

}*/

const sing = async () => {
  //throw new Error("AHHH OHH");
  throw "AHHH OHH";
  return "LA LA LA LA";
};
sing()
  .then((data) => {
    console.log("PROMISE RESOLVED WITH:", data);
  })
  .catch((error) => {
    console.log("OH NO, PROMISE REJECTED!");
    console.log(error);
  });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "admin") return "WELCOME!";
  throw "Invalid Password";
};

login("adfdfdsfd", "admin")
  .then((msg) => {
    console.log("LOGED IN!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });
