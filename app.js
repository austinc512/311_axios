const axios = require("axios");

function getContact() {
  // do something
  try {
    // do something
    const response = axios
      .get("https://randomuser.me/api") // url gets 1 user
      .then((response) => console.log(response.data.results));
  } catch (error) {
    // do something
    console.log("an error occurred:", error);
  }
}
// getContact();

// async await promises
// Start Wars API

const getStarWarsCharacter = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(`error:`, error);
  }
};
getStarWarsCharacter(7);
