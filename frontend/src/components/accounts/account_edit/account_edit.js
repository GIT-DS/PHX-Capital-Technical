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
        this.errorTag = this.errorTag.bind(this)
        this.errorMessage = this.errorMessage.bind(this)
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

    errorTag(field){
        let id = Object.keys(this.props.errors).includes(field) ? "error" : ""
        return id;
    }

    errorMessage(field){
        if (Object.keys(this.props.errors).includes(field)){
            return <p id='error-message'>{this.props.errors[[field]]}</p>
        }
    }

    render(){

        if(!this.props.account){
            return <h3>No Account to edit</h3>
        }

        return(
            <div id='account-form-container'>
                <form id='account-form'>
                    <label id={this.errorTag('name')}>
                        <div className='input-section'>
                            <p>Name:</p> 
                            <input type='text' placeholder='Name' value={this.state.name} onChange={this.update('name')}/>
                        </div>
                        {this.errorMessage('name')}
                    </label>
                    <label id={this.errorTag('entityType')}>
                        <div className='input-section'>
                            <p>Entity Type:</p>
                            <select id='entity-type' value={this.state.entityType} onChange={this.update('entityType')}>
                                <option defaultValue>Please select an Entity Type</option>
                                <option>Company</option>
                                <option>Individual</option>
                                <option>Investor</option>
                                <option>Trust</option>
                            </select>
                        </div>
                        {this.errorMessage('entityType')}

                    </label>
                    <label id={this.errorTag('ownerType')}>
                        <div className='input-section'>
                            <p>Owner Type:</p>    
                            <select id='owner-type' value={this.state.ownerType} onChange={this.update('ownerType')}>
                                <option defaultValue>Please select an Owner Type</option>
                                <option>Competitor</option>
                                <option>Seller</option>
                                <option>Investor</option>
                                <option>Professional</option>
                            </select>
                        </div>
                        {this.errorMessage('ownerType')}
                    </label>
                    <label id={this.errorTag('address')}>
                        <div className='input-section'>
                            <p>Address:</p> 
                            <input type='text' value={this.state.address} placeholder='Address' onChange={this.update('address')}/>
                        </div>
                        {this.errorMessage('address')}
                    </label>
                    <div id='button' onClick={this.submitHandler}>Edit Account</div>
                </form>
            </div>
        )
    }
}

export default AccountEdit