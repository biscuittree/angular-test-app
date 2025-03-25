function UserService() {

  let users = [
    { id: 1, username: 'deathman', firstName: 'John', lastName: 'Doe', email: 'john@example.com', type: 'Admin', password: 'qwerty123' },
    { id: 2, username: 'deathman2', firstName: 'John2', lastName: 'Doe2', email: 'john2@example.com', type: 'Admin', password: 'qwerty123' },
  ]

  return {
    getAll: function () {
      return users
    },
    create: function (user) {
      users.push({ ...user, id: Date.now() })
    },
    update: function (user) {
      let index = users.findIndex(u => u.id === user.id)
      if (index !== -1) users[index] = user
    },
    delete: function (id) {
      users = users.filter(user => user.id !== id)
    },
    isUsernameUnique: function (username, id) {
      if (id) {
        let index = users.findIndex(u => u.id === id)
        return users[index].username === username || !users.some(user => user.username === username)
      }
      return !users.some(user => user.username === username)
    }
  }
}

export default UserService