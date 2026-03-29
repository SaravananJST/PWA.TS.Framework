export const userData = () => {
  const timestamp = Date.now();

  return {
    name: "QATester",
    email: `saravananicar001+${timestamp}@gmail.com`,
    password: "Test@1234",
    firstName: "QA",
    lastName: "Tester",
    company: "Test Company ",
    address: "123 Test Street",
    address2: "124 Test Street",
    country: "India",
    state: "TN",
    city: "Chennai",
    zipcode: "600011",
    mobile: "1234567890"
  };
};