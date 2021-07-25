import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import * as customerActions from "../../redux/actions/customerActions";
import * as locationActions from "../../redux/actions/locationActions";
import CustomerList from "./CustomerList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class CustomersPage extends Component {

    state = {
        redirectToAddCustomerPage: false
    };

    componentDidMount() {
        const { customers, locations, actions } = this.props;

        if (customers.length === 0) {
            actions.loadCustomers().catch(error => {
                alert("Loading customers failed" + error);
            });
        }

        if (locations.length === 0) {
            actions.loadLocations().catch(error => {
                alert("Loading locations failed" + error);
            });
        }
    }

    handleDeleteCustomer = async customer => {
        toast.success("Customer deleted");
        try {
            await this.props.actions.deleteCustomer(customer);
        } catch (error) {
            toast.error("Delete failed. " + error.message, { autoClose: false });
        }
    };

    render() {
        console.log(this.props.loading)
        return (
            <>
                {this.state.redirectToAddCustomerPage && <Redirect to="/customer"></Redirect>}
                <h2>Customers</h2>
                {this.props.loading ?
                    <Spinner /> : (
                        <> <button
                            style={{ marginBottom: 20 }}
                            className="btn btn-primary add-customer"
                            onClick={() => this.setState({ redirectToAddCustomerPage: true })}
                        >Add Customer</button>

                            <CustomerList onDeleteClick={this.handleDeleteCustomer} customers={this.props.customers} />
                        </>)
                }
            </>
        )
    }
}

CustomersPage.propTypes = {
    locations: PropTypes.array.isRequired,
    customers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        customers:
            state.locations.length === 0
                ? []
                : state.customers.map(customer => {
                    return {
                        ...customer,
                        locationName: state.locations.find(a => a.id === customer.locationId).name
                    }
                }),
        locations: state.locations,
        loading: state.apiCallsInProgress > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCustomers: bindActionCreators(customerActions.loadCustomers, dispatch),
            loadLocations: bindActionCreators(locationActions.loadLocations, dispatch),
            deleteCustomer: bindActionCreators(customerActions.deleteCustomer, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);