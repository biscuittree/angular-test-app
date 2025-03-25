function validateUser ($timeout, UserService) {
  return {
    require: 'ngModel',
    scope: {
      matchWith: '=',
      userId: '='
    },
    link: function (scope, element, attrs, ngModel) {
      if (attrs.name === 'username') {
        ngModel.$validators.uniqueUsername = function (value,) {
          return UserService.isUsernameUnique(value, scope.userId)
        }
      }

      if (attrs.name === 'email') {
        ngModel.$validators.validEmail = function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        }
      }

      if (attrs.name === 'password') {
        ngModel.$validators.strongPassword = function (value) {
          return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
        }
      }

      if (attrs.name === 'repeatPassword') {
        ngModel.$validators.matchPassword = function (value) {
          return value === scope.matchWith
        }
      }
    }
  }
}

export default validateUser