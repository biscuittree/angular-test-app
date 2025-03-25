import angular from 'angular'
import toast from './toast.component'

const toastModule = angular.module('app.toast', [])

toastModule.component('toast', toast)

export default toastModule
