import { connect } from "react-redux";
import AccountCreate from "./account_create"
import { createAccount, clearAccountErrors } from "../../../actions/account_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user,
    errors: state.errors.account
})

const mDTP = dispatch => ({
    createAccount: account => dispatch(createAccount(account)),
    clearAccountErrors: () => dispatch(clearAccountErrors()),
})

export default connect(mSTP, mDTP)(AccountCreate)