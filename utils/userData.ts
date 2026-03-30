export type UserData = {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobile: string;
};

export const userData = (): UserData => {
  const timestamp = Date.now();
  return {
    name: "QATester",
    email: `saravananicar001+${timestamp}@gmail.com`,
    password: "Test@1234",
    firstName: "QA",
    lastName: "Tester",
    company: "Test Company",
    address: "123 Test Street",
    address2: "124 Test Street",
    country: "India",
    state: "TN",
    city: "Chennai",
    zipcode: "600011",
    mobile: "1234567890"
  };
};