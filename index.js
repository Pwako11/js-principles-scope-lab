var customerName = "bob";
const leastFavoriteCustomer = "Luke"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName
};

function setBestCustomer() {
    bestCustomer = "not bob";
};

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return bestCustomer
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Skywalker"
    return leastFavoriteCustomer
}