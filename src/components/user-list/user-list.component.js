const userListPage = {
  template: require('./user-list.component.html').default,
  controller: UserListPageController
}

function UserListPageController(UserService, ToastService) {
  const vm = this
  vm.users = UserService.getAll()
  vm.editUser = {}
  vm.isModalOpen = false
  vm.modalTitle = ''
  vm.formType = ''

  vm.saveUser = saveUser
  vm.deleteUser = deleteUser
  vm.openModal = openModal
  vm.closeModal = closeModal

  function saveUser() {
    if (vm.editUser.id) {
      UserService.update(vm.editUser)
      ToastService.show('User updated successfully!', 'success')
    } else {
      UserService.create(vm.editUser)
      ToastService.show('User created successfully!', 'success')
    }
    vm.users = UserService.getAll()
    vm.closeModal()
  }

  function deleteUser() {
    if (vm.editUser.id) {
      UserService.delete(vm.editUser.id)
      ToastService.show('User deleted successfully!', 'success')
      vm.users = UserService.getAll()
      vm.closeModal()
    }
  }

  function openModal(user) {
    vm.editUser = user ? { ...user, repeatPassword: user.password } : {}
    vm.modalTitle = user ? `${user.firstName} ${user.lastName}` : 'Create new user'
    vm.formType = user ? 'edit' : 'create'
    vm.isModalOpen = true
  };

  function closeModal() {
    vm.isModalOpen = false
  };
}

export default userListPage