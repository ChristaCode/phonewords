const axios = require('axios');

// Optionally the request above could also be done as
async function getTranslation(digit){
  try {
    const response = await axios.get('http://localhost:8000/translate/' + digit + '/');
    return response.data;
  } catch(e) {
    let errArr = ['Error', e.toString()];
    return errArr;
  };
}

export { getTranslation }; 