import api from "../api"

export const fetchPlanets = () => dispatch => {
    api.fetchPlanets(planets => {
        dispatch({
            type: 'FETCH_PLANETS',
            planets
        });
    });
}