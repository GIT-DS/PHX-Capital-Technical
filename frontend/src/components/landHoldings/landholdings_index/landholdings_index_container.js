import { connect } from "react-redux";
import LandHoldingIndex from './landholdings_index';
import { fetchAllLandHoldings } from "../../../actions/landholdings_actions"

const mSTP = (state, ownProps) => ({
    landHoldings: state.landHoldings,
    currentUserId: state.session.user.id
})

const mDTP = dispatch => ({
    fetchAllLandHoldings: userId => dispatch(fetchAllLandHoldings(userId))
})

export default connect(mSTP, mDTP)(LandHoldingIndex)