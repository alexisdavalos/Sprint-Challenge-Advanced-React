import axios from 'axios';

export const fetchData = (api) =>{
    axios.get(api)
    .then(response =>{
      console.log(response.data)
      return response;
      console.log('Fetching Data from API...', this.state.Users)
    })
    .catch(err => {
      console.log(err);
    })

  }