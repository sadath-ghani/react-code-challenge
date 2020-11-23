import './Planets.css';
import Grid from '../Grid';
import { connect } from 'react-redux';
import { getAllPlanets } from '../../reducers/planet';

const Planets = ({ planets }) => {
  const data = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
    values: planets,
    actions: [
      {
        label: 'Go to Films',
        path: 'films'
      },
      {
        label: 'Go to Residents',
        path: 'residents'
      }
    ]
  };

  return (
    <div className='App'>
      <h1>Star Wars Planets</h1>
      <Grid data={data} />
    </div>
  )
}

const mapStateToProps = state => ({
  planets: getAllPlanets(state.planets)
})

export default connect(
  mapStateToProps
)(Planets)