import angular from 'angular'
import UserService from './user.service'
import ToastService from './toast.service'

const servicesModule = angular.module('app.services', [])

servicesModule.service('UserService', UserService)
servicesModule.service('ToastService', ToastService)

export default servicesModule