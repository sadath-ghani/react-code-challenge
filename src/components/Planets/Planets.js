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
        action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`) }
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`) }
      }
    ]
  };

  return (
    <div className='App'>
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