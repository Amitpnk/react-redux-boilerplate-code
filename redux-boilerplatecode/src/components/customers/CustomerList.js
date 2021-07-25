import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomerList = ({ customers, onDeleteClick }) => (
	<table className="table">
		<thead>
			<tr>
				<th></th>
				<th>Title</th>
				<th>Location</th>
				<th>Category</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{customers.map((customer) => {
				return (
					<tr key={customer.id}>
						<td>
							{" "}
							<a
								className="btn btn-light"
								href={"http://pluralsight.com/customers/" + customer.slug}
							>
								Watch
							</a>
						</td>
						<td>
							<Link to={"/customer/" + customer.slug}>{customer.title}</Link>
						</td>
						<td>{customer.locationName}</td>
						<td>{customer.category}</td>
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
