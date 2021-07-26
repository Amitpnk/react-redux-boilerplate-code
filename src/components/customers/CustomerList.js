import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomerList = ({ customers, onDeleteClick }) => (
	<table className="table">
		<thead>
			<tr>
				<th></th>
				<th>Code</th>
				<th>Location</th>
				<th>Name</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{customers.map((customer) => {
				return (
					<tr key={customer.id}>
						<td>{customer.custId}</td>
						<td>
							<Link to={"/customer/" + customer.custId}>{customer.code}</Link>
						</td>
						<td>{customer.locationName}</td>
						<td>{customer.name}</td>
						<td>
							<button
								className="btn btn-outline-danger"
								onClick={() => onDeleteClick(customer)}
							>
								Delete
							</button>
						</td>
					</tr>
				);
			})}
		</tbody>
	</table>
);

CustomerList.prototype = {
	customers: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default CustomerList;
