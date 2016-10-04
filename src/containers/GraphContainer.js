import { connect } from 'react-redux'
import Graph from '../components/Graph'

const mapStateToProps = (state) => ({
  rankings: state.rankings
})

const GraphContainer = connect(
  mapStateToProps
)(Graph)

export default GraphContainer
