import { connect } from "react-redux";
import LandHoldingIndex from './landholdings_index';
import { fetchAllLandHoldings, deleteLandHolding } from "../../../actions/landholdings_actions"
import {updateAccount, fetchAllAccounts} from "../../../actions/account_actions"
const mSTP = (state, ownProps) => ({
    landHoldings: state.landHoldings,
    currentUserId: state.session.user.id,
    accounts: state.accounts
})

const mDTP = dispatch => ({
    fetchAllLandHoldings: userId => dispatch(fetchAllLandHoldings(userId)),
    fetchAllAccounts: userId => dispatch(fetchAllAccounts(userId)),
    deleteLandHolding: landHoldingId => dispatch(deleteLandHolding(landHoldingId)),
    updateAccount: account => dispatch(updateAccount(account))
    

})

export default connect(mSTP, mDTP)(LandHoldingIndex)