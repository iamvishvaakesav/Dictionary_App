import axios from "axios";

function handleDictLookup(e, searchTerm, setDictResponse) {
  e.preventDefault();
  axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
    .then((response) => {
      if (response.data[0].meanings) {
        setDictResponse(response.data[0]);
      } else if (response.title) {
        setDictResponse({});
      }

      console.log(response);
    })
    .catch(() => {
      setDictResponse({});
    });
}

export default handleDictLookup;
