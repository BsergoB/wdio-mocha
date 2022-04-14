const axios = require("axios").default;
const helperqa = require('../pageobjects/HelperQA.page');

describe("'api request from wdio", () => {
  it("check Email", async () => {
    await browser.url("https://github.com/");
    await browser.pause(1000);
    const products = await $(
      "li.mr-0:nth-child(1) > details:nth-child(1) > summary"
    );
    await products.moveTo();
    await browser.pause(1000);

    /*const message = */helperqa.validateEmail();

    /*const message1 = */helperqa.checkMessages('bseergob@mailsac.com');

    await browser.pause(1000);

    /*axios
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

    await browser.pause(1000);

    axios({
      method: 'post',
      url: 'https://mailsac.com/api/validations/addresses',
      headers: {'content-type': 'application/json', 'Mailsac-Key': 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031'},
      data: {emails: ['bseergob@mailsac.com', 'bsergob@gmail.com']},
      json: true
    })
    .then((response1) => {
      console.log(response1.data);
    });
    await browser.pause(1000);*/

  });

});
