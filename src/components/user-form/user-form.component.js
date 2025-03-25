const userForm = {
  template: require('./user-form.component.html').default,
  bindings: {
    user: '=',
    onSave: '&',
    onDelete: '&'
  },
  controller: UserFormController
}

function UserFormController($scope) {
  const vm = this
  vm.userTypes = ['Admin', 'Driver']
  vm.isValid = false
  vm.isSubmitted = false
  vm.onSubmit = onSubmit

  $scope.$watch('userForm.$valid', function (newVal) {
    vm.isValid = newVal
  });

  function onSubmit() {
    vm.isSubmitted = true
    if (vm.isValid) {
      vm.onSave()
    }
  }
}

export default userForm