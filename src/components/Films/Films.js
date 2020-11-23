import './Films.css';
import { connect } from 'react-redux';
import { getPlanet } from '../../reducers/planet';

const Films = ({ planet }) => {
  console.log(planet)

  return (
    <h1>Films</h1>
  )
}

const mapStateToProps = state => ({
  planet: getPlanet(state.planets, "Tatooine")
})

export default connect(
  mapStateToProps
)(Films)