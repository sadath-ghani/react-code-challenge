import './Residents.css';
import { connect } from 'react-redux';
import { getPlanet } from '../../reducers/planet';

const Residents = ({ planet }) => {
  console.log(planet)

  return (
    <h1>Residents</h1>
  )
}

const mapStateToProps = state => ({
  planet: getPlanet(state.planets, "Tatooine")
})

export default connect(
  mapStateToProps
)(Residents)