export const sortUser = ({ users, sortOption }) => {
  // console.log(users, sortOption, `sortOption1111111111`);
  if (sortOption == null) return users;

  switch (sortOption) {
    case "A to Z":
      users.sort((a, b) => a.firstName.localeCompare(b.firstName));
      break;
    case "Z to A":
      users.sort((a, b) => b.firstName.localeCompare(a.firstName));
      break;
    case "Created Date":
      users.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
      break;
    case "Last Updated":
      users.sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));
      break;
    default:
      break;
  }
  return users;
};

export const filterByRole = ({ users, filterOption }) => {
  // console.log(users, filterOption, `filterOption22222`);
  if (filterOption == null) return users;
  return users.filter(
    (user) => user.role === filterOption || filterOption === "All"
  );
};
