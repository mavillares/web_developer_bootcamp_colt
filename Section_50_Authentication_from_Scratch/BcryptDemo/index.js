const bcrypt = require("bcrypt");
//One option
/*const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};*/
//Two Option
const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};
const login = async (pw, hashesPw) => {
  const result = await bcrypt.compare(pw, hashesPw);
  if (result) {
    console.log("LOGGED YOU IN! SUCCESSFUL MATCH!");
  } else {
    console.log("INCORRECT!");
  }
};
//hashPassword("monkey");
login("monkey", "$2b$12$cztOwG9Pye5wd.SRzL5SVOGqlvRXjGGU0T0PEdpL985XrY25crbym");
