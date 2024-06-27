const sortUser = ({ filteredUsers, sortOption }) => {
  switch (sortOption) {
    case "A to Z":
      filteredUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
      break;
    case "Z to A":
      filteredUsers.sort((a, b) => b.firstName.localeCompare(a.firstName));
      break;
    case "Created Date":
      filteredUsers.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      break;
    case "Last Updated":
      filteredUsers.sort(
        (a, b) => new Date(b.lastLogin) - new Date(a.lastLogin)
      );
      break;
    default:
      break;
  }
  return filteredUsers;
};

export default sortUser;
