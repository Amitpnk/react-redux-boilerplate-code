import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { loadCustomers, saveCustomer } from "../../redux/actions/customerActions";
import { loadLocations } from "../../redux/actions/locationActions";
import CustomerForm from "./CustomerForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const newCustomer = {
    id: null,
    title: "",
    locationId: null,
    category: ""
};

function ManageCustomerPage({
    customers,
    locations,
    loadLocations,
    loadCustomers,
    saveCustomer,
    history,
    ...props }) {
    const [customer, setCustomer] = useState({ ...props.customer });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (customers.length === 0) {
            loadCustomers().catch(error => {
                alert("Loading customers failed" + error);
            });
        } else {
            setCustomer({ ...props.customer })
        }

        if (locations.length === 0) {
            loadLocations().catch(error => {
                alert("Loading locations failed" + error);
            });
        }
    }, [props.customer]);

    function handleChange(event) {
        const { name, value } = event.target;
        setCustomer(prevCustomer => ({
            ...prevCustomer,
            [name]: name === "locationId" ? parseInt(value, 10) : value
        }));
    }
    function formIsValid() {
        const { title, locationId, category } = customer;
        const errors = {};

        if (!title) errors.title = "Title is required.";
        if (!locationId) errors.location = "Location is required";
        if (!category) errors.category = "Category is required";

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        saveCustomer(customer).then(() => {
            toast.success("Customer saved.");
            history.push("/customers");
        }).catch(error => {
            setSaving(false);
            setErrors({ onSave: error.message });
        });
    }
    return locations.length === 0 || customers.length === 0 ? (
        <Spinner />
    ) : (
        <CustomerForm
            customer={customer}
            errors={errors}
            locations={locations}
            onChange={handleChange}
            onSave={handleSave}
            saving={saving}
        />
    )
}

ManageCustomerPage.propTypes = {
    customer: PropTypes.object.isRequired,
    locations: PropTypes.array.isRequired,
    customers: PropTypes.array.isRequired,
    loadCustomers: PropTypes.func.isRequired,
    loadLocations: PropTypes.func.isRequired,
    saveCustomer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export function getCustomerBySlug(customers, slug) {
    return customers.find(customer => customer.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
    const slug = ownProps.match.params.slug;
    const customer =
        slug && state.customers.length > 0
            ? getCustomerBySlug(state.customers, slug)
            : newCustomer;
    return {
        customer,
        customers: state.customers,
        locations: state.locations
    }
}

const mapDispatchToProps = {
    loadCustomers,
    loadLocations,
    saveCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);
