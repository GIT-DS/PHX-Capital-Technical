import { connect } from "react-redux";
import LandHoldingCreate from "./landholdings_create"
import { createLandHolding } from "../../../actions/landholdings_actions";
import { fetchAllAccounts, updateAccount } from "../../../actions/account_actions"

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user,
    accounts: state.accounts
})

const mDTP = dispatch => ({
    fetchAllAccounts: userId => dispatch(fetchAllAccounts(userId)),
    updateAccount: account => dispatch(updateAccount(account)),
    createLandHolding: landHolding => dispatch(createLandHolding(landHolding))
})

export default connect(mSTP, mDTP)(LandHoldingCreate)