import { connect } from "react-redux";
import AccountIndex from './account_index';
import { fetchAllAccounts, deleteAccount } from "../../../actions/account_actions";
import {deleteLandHolding, fetchAllLandHoldings} from "../../../actions/landholdings_actions"

const mSTP = (state, ownProps) => ({
    accounts: state.accounts,
    landHoldings: state.landHoldings,
    currentUserId: state.session.user.id
})

const mDTP = dispatch => ({
    fetchAllAccounts: userId => dispatch(fetchAllAccounts(userId)),
    fetchAllLandHoldings: userId => dispatch(fetchAllLandHoldings(userId)),
    deleteAccount: accountId => dispatch(deleteAccount(accountId)),
    deleteLandHolding: landholdingId => dispatch(deleteLandHolding(landholdingId))
})

export default connect(mSTP, mDTP)(AccountIndex)