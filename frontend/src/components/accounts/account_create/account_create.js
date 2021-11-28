import React from "react";

class AccountCreate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            entityType: "",
            ownerType: "",
            address: "",
            ownerId: this.props.currentUser.id,
            numLandHoldings: "0"
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.update = this.update.bind(this)
    }

    update(field){
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    submitHandler(e){
        e.preventDefault()
        this.props.createAccount(this.state)
    }

    render(){
        return(
            <div>
                <form id='account-create'>
                    <input type='text' placeholder='Name' onChange={this.update('name')}/>
                    <select id='entity-type' onChange={this.update('entityType')}>
                        <option defaultValue>Please select an Entity Type</option>
                        <option>Company</option>
                        <option>Individual</option>
                        <option>Investor</option>
                        <option>Trust</option>
                    </select>
                    <select id='owner-type' onChange={this.update('ownerType')}>
                        <option defaultValue>Please select an Owner Type</option>
                        <option>Competitor</option>
                        <option>Seller</option>
                        <option>Investor</option>
                        <option>Professional</option>
                    </select>
                    <input type='text' placeholder='Address' onChange={this.update('address')}/>
                    <button onClick={this.submitHandler}>Create Account</button>
                </form>
            </div>
        )
    }
}

export default AccountCreate