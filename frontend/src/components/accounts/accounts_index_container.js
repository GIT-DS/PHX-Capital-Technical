import { connect } from "react-redux";
import AccountIndex from './account_index';
import { fetchAllAccounts } from "../../actions/account_actions";

const mSTP = (state, ownProps) => ({
    accounts: state.accounts,
    currentUser: state.session.user
})

const mDTP = dispatch => ({
    fetchAllAccounts: () => dispatch(fetchAllAccounts)
})

export default connect(mSTP, mDTP)(AccountIndex)