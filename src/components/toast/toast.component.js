const toast = {
  template: require('./toast.component.html').default,
  controller: ToastController
}

function ToastController($scope, $element) {
  var vm = this
  vm.toasts = []

  $scope.$on('showToast', function (event, toast) {
    vm.toasts.push(toast)
  })

  $scope.$on('removeToast', function (event, toastId) {
    vm.toasts = vm.toasts.filter(t => t.id !== toastId)
  })
}

export default toast