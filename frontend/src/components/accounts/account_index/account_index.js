import React from "react";
import { Link } from 'react-router-dom'

class AccountIndex extends React.Component{


    componentDidMount(){
        // console.log(this.props.currentUser)
        this.props.fetchAllAccounts(this.props.currentUserId)
        // this.setState({userAccounts: this.props.accounts.filter(account => this.props.currentUser === account.ownerId)})
    }

    render(){
        if(!this.props.accounts){
            return null;
        }

        if (this.props.accounts.length > 0){
            return <div>
                {this.props.accounts.map((account,i) => (
                    <div key={i}>
                        <div className='account-info'>
                            <h3>Name: {account.name}</h3>
                            <p>Entity Type: {account.entityType}</p>
                            <p>Owner Type: {account.ownerType}</p>
                            <p>Address: {account.address}</p>
                            <p>Number of Land Holdings: {account.numLandHoldings}</p>
                        </div>
                        <div className='buttons'>
                            <Link to={`/accounts/edit/${account._id}`}><i className="fas fa-edit"/></Link>
                            <i className="fas fa-trash-alt"/>
                        </div>
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