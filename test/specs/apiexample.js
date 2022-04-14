describe("testing github", () => {
  it("allure", async () => {
    await browser.url("https://github.com/");
    await browser.pause(1000);
    const products = await $(
      "li.mr-0:nth-child(1) > details:nth-child(1) > summary"
    );
  })
})

/*const axios = require("axios").default;


axios
  .get("https://fortnite-api.com/v2/news/br")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

axios
  .get("https://reqres.in/api/users?page=2")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

axios
  .get("https://reqres.in/api/users/2")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

axios
  .post("https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

  //OR

axios({
    method: 'post',
    url: 'https://reqres.in/api/register',
    data: {
        email: "eve.holt@reqres.in",
        password: "pistol"
    }
  })
  .then((response) => {
    console.log(response.data);
  });


axios
  .post("https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });


axios
  .get("https://mailsac.com/api/addresses/bseergob@mailsac.com/messages", {
        headers: {'Mailsac-Key': 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031'}
  })
  .then((response) => {
        console.log(response.data)
  })
  .catch((error) => {
      console.error(error);
  });

  axios
  .get("https://mailsac.com/api/dirty/bseergob@mailsac.com/1703to6BYkNWem1aRIyBVqTcu-0", {
        headers: {'Mailsac-Key': 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031'}
  })
  .then((response) => {

        console.log(response.data);
  })
  .catch((error) => {
      console.error(error);
  });

  axios
  .get("https://mailsac.com/api/dirty/bseergob@mailsac.com/s066Bydhzgu8h3fO4kzYDEz4PYJIC-0", {
        headers: {'Mailsac-Key': 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031'}
  })
  .then((response) => {

        console.log(response.data);
  })
  .catch((error) => {
      console.error(error);
  });

axios
  .get("https://mailsac.com/api/validations/addresses/bseergob@mailsac.com", {
        headers: {'Mailsac-Key': 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031'}
  })
  .then((response) => {

        console.log(response.data);
  })
  .catch((error) => {
      console.error(error);
  });

  axios({
    method: 'post',
    url: 'https://mailsac.com/api/validations/addresses',
    headers: {'content-type': 'application/json', 'Mailsac-Key': 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031'},
    data: {emails: ['bseergob@mailsac.com', 'bsergob@gmail.com']},
    json: true
  })
  .then((response) => {
    console.log(response.data);
  });*/
