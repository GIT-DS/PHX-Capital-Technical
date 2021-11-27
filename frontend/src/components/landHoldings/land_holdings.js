
import React from "react";

class LandHoldingCreate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            account: "",
            legalEntity: "",
            netMineralAcres: "",
            mineralOwnerRoyalty: this.props.currentUser.id,
            sectionName: "",
            section: "",
            township: "",
            range: "",
            titleSource: ""
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.update = this.update.bind(this)

        console.log(this.props)
    }

    componentDidMount(){
        this.props.fetchAllAccounts(this.props.currentUser.id);
    }

    update(field){
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    submitHandler(e){
        e.preventDefault()
        this.props.createLandHolding(this.state)
    }

    render(){
        return(
            <div>
                <form id='account-create'>
                    <input type='text' placeholder='Name' onChange={this.update('name')}/>
                    <select id='account-select' onChange={this.update('account')}>
                        <option defaultValue>Please select an Account</option>
                        {this.props.accounts.map(account => <option value={account}>{account.name}</option>)}
                    </select>
                    <input type='text' placeholder='Legal Entity' onChange={this.update('legalEntity')}/>
                    <input type='number' placeholder='Net Mineral Acres' onChange={this.update('legalEntity')}/>
                    <div>
                        <input type='text' placeholder='Mineral Owner Royalty' onChange={this.update('mineralOwnerRoyalty')}/>
                        <p>%</p>
                    </div>
                    <input type='text' placeholder='Section' onChange={this.update('section')}/>
                    <input type='text' placeholder='Township' onChange={this.update('township')}/>
                    <input type='text' placeholder='Range' onChange={this.update('range')}/>


                    <select id='title-source' onChange={this.update('titleSource')}>
                        <option defaultValue>Please select a Title Source</option>
                        <option>Class A</option>
                        <option>Class B</option>
                        <option>Class C</option>
                        <option>Class D</option>
                    </select>
                    <button onClick={this.submitHandler}>Create LandHolding</button>
                </form>
            </div>
        )
    }
}

export default LandHoldingCreate