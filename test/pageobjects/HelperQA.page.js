const axios = require("axios").default;
const apikey = 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031';

class HelperQA {


/*async configAxios() {
    return axios.create({
    baseURL: "https://mailsac.com/api/",
    timeout: 1000,
    headers:
    { 'content-type': 'application/json',
        "Host": "mailsac.com",
    "Mailsac-Key": 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031',
    },
    });
    }
    catchErrors(error)
    {
    console.dir(error);
    if (typeof error.response !== 'undefined') {
    console.log("---------------API REQUEST ERROR------------------")
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log("---------------API REQUEST ERROR------------------")
    }
    throw error;
    }

    async checkMesages(email) { // your get request
        const client = await this.configAxios(); //calls your config with headers
        return client.get('addresses/${email}/messages', // sets request methodendpoint
            ).then(response => {
                console.log(response.data);
                return response.data;
    }).catch(this.apiFailureCallback); //calls preconfigured catch error method
    }*/
    validateEmail() {
        axios({
            method: 'post',
            url: 'https://mailsac.com/api/validations/addresses',
            headers: {'content-type': 'application/json', 'Mailsac-Key': `${apikey}`},
            data: {emails: ['bseergob@mailsac.com', 'bsergob@gmail.com']},
            json: true
          })
          .then((response1) => {
            console.log(response1.data);
            return response1.data;
          });
    }

    /*checkMessages() {
        axios
        .get("https://mailsac.com/api/addresses/bseergob@mailsac.com/messages", {
            headers: {'Mailsac-Key': 'k_OCViOoCe46PnP07DhlYAJ0ja5QudlAIFjQ2031'}
        })
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        });
    }*/

    checkMessages(email) {
        axios
        .get(`https://mailsac.com/api/addresses/${email}/messages`, {
            headers: {'Mailsac-Key': `${apikey}`}
        })
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

module.exports = new HelperQA();