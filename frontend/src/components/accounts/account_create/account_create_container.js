import { connect } from "react-redux";
import AccountCreate from "./account_create"
import { createAccount } from "../../../actions/account_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user
})

const mDTP = dispatch => ({
    createAccount: account => dispatch(createAccount(account))
})

export default connect(mSTP, mDTP)(AccountCreate)