import { connect } from "react-redux";
import AccountEdit from "./account_edit"
import { fetchAllAccounts, updateAccount, clearAccountErrors } from "../../../actions/account_actions";

const mSTP = (state, ownProps) => {
    return {
    currentUser: state.session.user,
    account: state.accounts.filter(account => account._id === ownProps.match.params.accountId)[0],    errors: state.errors.account
}}

const mDTP = dispatch => ({
    updateAccount: account => dispatch(updateAccount(account)),
    fetchAllAccounts: userId => dispatch(fetchAllAccounts(userId)),
    clearAccountErrors: () => dispatch(clearAccountErrors())
})

export default connect(mSTP, mDTP)(AccountEdit)