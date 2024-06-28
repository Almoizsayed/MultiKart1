export const sortUser = ({ users = [], sortOption = "Created Date" }) => {
  // if (!Array.isArray(users)) return [];

  switch (sortOption) {
    case "A to Z":
      return users
        .slice()
        .sort((a, b) => a.firstName.localeCompare(b.firstName));
    case "Z to A":
      return users
        .slice()
        .sort((a, b) => b.firstName.localeCompare(a.firstName));
    case "Created Date":
      return users
        .slice()
        .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    case "Last Updated":
      return users
        .slice()
        .sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));
    default:
      return users;
  }
};

export const filterByRole = ({ users, filterOption }) => {
  if (!filterOption) return users;
  return users.filter((user) => user.role === filterOption);
};
