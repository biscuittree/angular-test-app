const modal = {
  template: require('./modal.component.html').default,
  bindings: {
    show: '=',
    title: '@',
    onClose: '&'
  },
  transclude: true,
  controller: ModalController
}

function ModalController() {
  const vm = this
  vm.close = close
  function close() {
    vm.show = false
    if (vm.onClose) vm.onClose()
  }
}

export default modal