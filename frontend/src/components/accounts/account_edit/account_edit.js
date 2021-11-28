import React from "react";

class AccountEdit extends React.Component{
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

    componentDidMount(){
        this.props.fetchAllAccounts(this.props.currentUser.id)
        .then(()=>{
            const {name, entityType, ownerType, _id, address, numLandHoldings} = this.props.account
            this.setState({
                name: name,
                entityType: entityType,
                ownerType: ownerType,
                address: address,
                numLandHoldings: numLandHoldings.toString(),
                _id: _id
            })
        })

    }

    update(field){
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    submitHandler(e){
        e.preventDefault()
        this.props.updateAccount(this.state)
    }

    render(){

        if(!this.props.account){
            return <h3>No Account to edit</h3>
        }

        return(
            <div id='account-form-container'>
                <form id='account-form'>
                    <label>Name: 
                        <input type='text' placeholder='Name' value={this.state.name} onChange={this.update('name')}/>

                    </label>
                    <label>Entity Type:
                        <select id='entity-type' value={this.state.entityType} onChange={this.update('entityType')}>
                            <option defaultValue>Please select an Entity Type</option>
                            <option>Company</option>
                            <option>Individual</option>
                            <option>Investor</option>
                            <option>Trust</option>
                        </select>

                    </label>
                    <label>Owner Type: 
                        <select id='owner-type' value={this.state.ownerType} onChange={this.update('ownerType')}>
                            <option defaultValue>Please select an Owner Type</option>
                            <option>Competitor</option>
                            <option>Seller</option>
                            <option>Investor</option>
                            <option>Professional</option>
                        </select>
                    </label>
                    <label>Address: 
                        <input type='text' value={this.state.address} placeholder='Address' onChange={this.update('address')}/>

                    </label>
                    <button onClick={this.submitHandler}>Edit Account</button>
                </form>
            </div>
        )
    }
}

export default AccountEdit