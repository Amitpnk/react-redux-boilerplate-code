import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CustomerForm = ({
    customer,
    locations,
    onSave,
    onChange,
    saving = false,
    errors = {}
}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{customer.id ? "Edit" : "Add"} Customer</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name="code"
                label="Code"
                value={customer.code}
                onChange={onChange}
                error={errors.code}
            />

            <SelectInput
                name="locationId"
                label="Location"
                value={customer.locationId || ""}
                defaultOption="Select Location"
                options={locations.map(location => ({
                    value: location.id,
                    text: location.name
                }))}
                onChange={onChange}
                error={errors.location}
            />

            <TextInput
                name="name"
                label="Name"
                value={customer.name}
                onChange={onChange}
                error={errors.name}
            />

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

CustomerForm.propTypes = {
    locations: PropTypes.array.isRequired,
    customer: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default CustomerForm;
