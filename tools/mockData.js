const customers = [
  {
    id: 1,
    code: "c 001",
    custId: "c-001",
    locationId: 1,
    name: "cust 01"
  },
  {
    id: 2,
    code: "c 002",
    custId: "c-002",
    locationId: 1,
    name: "cust 02"
  },
  {
    id: 3,
    code: "c 003",
    custId: "c-003",
    locationId: 2,
    name: "cust 03"
  },
  {
    id: 4,
    code: "c 004",
    custId: "c-004",
    locationId: 3,
    name: "cust 04"
  }
];

const locations = [
  { id: 1, name: "Bangalore" },
  { id: 2, name: "Pune" },
  { id: 3, name: "Chennai" }
];

const newCustomer = {
  id: null,
  code: "",
  locationId: null,
  name: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCustomer,
  customers,
  locations
};
