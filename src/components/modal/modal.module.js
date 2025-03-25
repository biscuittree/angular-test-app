import angular from 'angular'
import modal from './modal.component'

const modalModule = angular.module('app.modal', [])

modalModule.component('modal', modal)

export default modalModule
