function ToastService($rootScope, $timeout) {
  var service = {}

  service.show = function (message, type = 'success') {
    var toastId = Date.now()
    $rootScope.$broadcast('showToast', { id: toastId, message: message, type: type })

    $timeout(function () {
      $rootScope.$broadcast('removeToast', toastId)
    }, 3000)
  }

  return service
}

export default ToastService