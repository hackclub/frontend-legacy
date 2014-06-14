'use strict';

angular.module('hackeduApp')
  .factory('Session', function Session() {
    this.create = function (token, userId, userType) {
      this.token = token;
      this.user = userId;
      this.userType = userType;
    };
    this.destroy = function () {
      this.token = null;
      this.userId = null;
      this.userType = null;
    };
    return this;
  });
