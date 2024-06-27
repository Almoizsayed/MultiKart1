import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [
    {
      id: 1,
      photo: "https://via.placeholder.com/100",
      firstName: "Kane",
      lastName: "Wilson",
      email: "mia.wilson@example.com",
      phone: "345-678-9012",
      lastLogin: "2024-06-01",
      role: "User",
      status: "Active",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/100",
      firstName: "Noah",
      lastName: "Martinez",
      email: "noah.martinez@example.com",
      phone: "456-789-0123",
      lastLogin: "2024-06-02",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/100",
      firstName: "Olivia",
      lastName: "Garcia",
      email: "olivia.garcia@example.com",
      phone: "567-890-1234",
      lastLogin: "2024-06-03",
      role: "Admin",
      status: "Active",
    },
    {
      id: 4,
      photo: "https://via.placeholder.com/100",
      firstName: "Liam",
      lastName: "Rodriguez",
      email: "liam.rodriguez@example.com",
      phone: "678-901-2345",
      lastLogin: "2024-06-04",
      role: "User",
      status: "Inactive",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/100",
      firstName: "Emma",
      lastName: "Hernandez",
      email: "emma.hernandez@example.com",
      phone: "789-012-3456",
      lastLogin: "2024-06-05",
      role: "Admin",
      status: "Active",
    },
    {
      id: 6,
      photo: "https://via.placeholder.com/100",
      firstName: "Lucas",
      lastName: "Lopez",
      email: "lucas.lopez@example.com",
      phone: "890-123-4567",
      lastLogin: "2024-06-06",
      role: "User",
      status: "Inactive",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/100",
      firstName: "Sophia",
      lastName: "Perez",
      email: "sophia.perez@example.com",
      phone: "901-234-5678",
      lastLogin: "2024-06-07",
      role: "Admin",
      status: "Active",
    },
    {
      id: 8,
      photo: "https://via.placeholder.com/100",
      firstName: "Elijah",
      lastName: "Sanchez",
      email: "elijah.sanchez@example.com",
      phone: "012-345-6789",
      lastLogin: "2024-06-08",
      role: "User",
      status: "Active",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/100",
      firstName: "Isabella",
      lastName: "Clark",
      email: "isabella.clark@example.com",
      phone: "123-456-7890",
      lastLogin: "2024-06-09",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 10,
      photo: "https://via.placeholder.com/100",
      firstName: "Ethan",
      lastName: "Ramirez",
      email: "ethan.ramirez@example.com",
      phone: "234-567-8901",
      lastLogin: "2024-06-10",
      role: "User",
      status: "Active",
    },
    {
      id: 11,
      photo: "https://via.placeholder.com/100",
      firstName: "Ava",
      lastName: "Lewis",
      email: "ava.lewis@example.com",
      phone: "345-678-9012",
      lastLogin: "2024-06-11",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 12,
      photo: "https://via.placeholder.com/100",
      firstName: "James",
      lastName: "Walker",
      email: "james.walker@example.com",
      phone: "456-789-0123",
      lastLogin: "2024-06-12",
      role: "User",
      status: "Active",
    },
  ],
  lastUserId: 12,
  setUsers: (users) => set({ users }),

  addUser: (newUser) =>
    set((state) => {
      const updatedUsers = [...state.users, newUser];
      const updatedLastUserId = newUser.id;
      return { users: updatedUsers, lastUserId: updatedLastUserId };
    }),

  updateUser: (userId, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user
      ),
    })),

  updateUserStatus: (userId, status) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, status } : user
      ),
    })),
  deleteUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),
}));

export default useUserStore;
