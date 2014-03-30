'use strict';

angular.module('hackeduApp')
  .controller('AttributionsCtrl', function ($scope) {
    $scope.icons = [
      {
        'name': 'Books',
        'url': 'http://thenounproject.com/term/books/21509/',
        'author': 'Piotrek Chuchla',
        'authorUrl': 'http://www.piotrekchuchla.com'
      },
      {
        'name': 'Community',
        'url': 'http://thenounproject.com/term/community/5040/',
        'author': 'Dmitry Baranovskiy',
        'authorUrl': 'http://dmitry.baranovskiy.com'
      },
      {
        'name': 'Open Source',
        'url': 'http://thenounproject.com/term/open-source/8233/',
        'author': 'Oriol Carbonell',
        'authorUrl': 'http://www.hiperic.com'
      }
    ];
  });
