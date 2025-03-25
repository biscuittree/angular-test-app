import angular from 'angular'
import validateUser from './validate-user.directive'

const directivesModule = angular.module('app.directives', [])

directivesModule.directive('validateUser', validateUser)

export default directivesModule