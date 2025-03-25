import angular from 'angular'
import './services/services.module'
import './directives/directives.module'
import './components/user-list/user-list.module'
import './components/modal/modal.module'
import './components/toast/toast.module'
import './components/user-form/user-form.module'

const appModule = angular.module('app', [
  'app.user-list',
  'app.modal',
  'app.toast',
  'app.user-form',
  'app.services',
  'app.directives'
]);

export default appModule