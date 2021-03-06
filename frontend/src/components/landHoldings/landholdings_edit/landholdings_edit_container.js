import { connect } from "react-redux";
import { clearLandHoldingErrors, editLandHolding, fetchAllLandHoldings, fetchLandHolding } from "../../../actions/landholdings_actions";
import LandHoldingEdit from "./landholdings_edit";
import { fetchAllAccounts } from "../../../actions/account_actions"

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user,
    landHolding: state.landHoldings.filter(landholding => landholding._id === ownProps.match.params.landHoldingId)[0],
    accounts: state.accounts,
    errors: state.errors.landholding
})

const mDTP = dispatch => ({
    fetchAllAccounts: userId => dispatch(fetchAllAccounts(userId)),
    fetchAllLandHoldings:  (userId) => dispatch(fetchAllLandHoldings(userId)),
    fetchLandHolding: landHoldingId => dispatch(fetchLandHolding(landHoldingId)),
    editLandHolding: landHolding => dispatch(editLandHolding(landHolding)),
    clearLandHoldingErrors: () => dispatch(clearLandHoldingErrors)
})

export default connect(mSTP, mDTP)(LandHoldingEdit)