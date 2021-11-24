import React from "react";
import { Link } from 'react-router-dom'

class AccountIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userAccounts: []
        }
    }

    componentDidMount(){
        this.props.fetchAllAccounts()
        this.setState({userAccounts: this.props.accounts.filter(account => this.props.currentUser === account.ownerId)})
    }

    render(){
        if (this.state.userAccounts.length > 0){
            return <div>
                {this.state.userAccounts.map(account => (
                    <div>
                        <h3>{account.name}</h3>
                        <p>Entity Type: {account.entityType}</p>
                        <p>Owner Type: {account.ownerType}</p>
                        <p>Address: {account.address}</p>
                        <p>Number of Land Holdings: {account.numLandHoldings}</p>
                    </div>
                ))}
            </div>
        } else {
            return <div>
                <h3>No Accounts yet! <Link to='/accounts/create'>Create an Account</Link></h3>
            </div>
        }
    }
}

export default AccountIndex