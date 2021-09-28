import axios from 'axios';

import { addDigimon } from './actions';

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios.get('https://digimon-api.vercel.app/api/digimon').then((response) => {
    const filtered = response.data.filter(
      (digi) => digi.name.toLowerCase() === digimon.toLowerCase()
    );
    dispatch(addDigimon(filtered));
  });
};

export default addDigimonsThunk;
