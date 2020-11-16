import { combineReducers } from "redux";

const initialState = {
    planets: []
}

const planets = (state = initialState) => {
    return state;
}

const byName = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_PLANETS':
            return {
                ...state,
                ...action.planets.reduce((obj, planet) => {
                    obj[planet.name] = planet
                    return obj
                }, {})
            }
        default:
            const { planetName } = action
            if (planetName) {
                return {
                    ...state,
                    [planetName]: planets(state[planetName], action)
                }
            }
            return state
    }
}

const visibleNames = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_PLANETS':
        return action.planets.map(planet => planet.name)
      default:
        return state
    }
  }

export default combineReducers({
    byName,
    visibleNames
})

export const getPlanet = (state, name) =>
  state.byName[name]

export const getAllPlanets = state =>
  state.visibleNames.map(name => getPlanet(state, name))
