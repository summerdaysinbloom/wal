var app = angular.module('ngControllers', ['duScroll']);

app
.value('duScrollOffset', 80)
.controller('scrollCtrl', function($scope, $document,$location, $timeout) {
    var top = 400;
    var duration = 2000; //milliseconds

    var offset = 80;

    $scope.closePage = function() {
      $location.path('/').replace();
    }

  }
)
.controller('sectorsImportCtrl', 
  function($scope, $location, $anchorScroll, $http, $timeout) {
    console.log('[C] sectorsImportCtrl')
    window.scrollTo(0, 0);
  }
)
.controller('onlineSellersCtrl', 
  function($scope, $location, $anchorScroll, $http, $timeout) {
    console.log('[C] onlineSellersCtrl')
    window.scrollTo(0, 0);
  }
)
.controller('faqCtrl', 
  function($scope, $location, $anchorScroll, $http, $timeout) {
    console.log('[C] faqCtrl')
    window.scrollTo(0, 0);
  }
)
.controller('MainCtrl', function($scope, $location, $anchorScroll, $http, $timeout) {

        $http.get('/list.json', { cache: true })
        	.success(function(data) {
        	    $scope.list = data;
        	}).error(function(data, status) {
        	    console.log('error',data);
        	}); 

        $scope.scroll = function(id) {

          if(jQuery('#' + id).length == 1){
              // console.log('main : scrolling ' , jQuery('#' + id).offset().top);
              jQuery('html, body').animate({
                scrollTop:  jQuery('#' + id).position().top
            });
          };

      	};

        $scope.shareTracking = function(share_type) {
            _gaq.push(['_trackEvent', 'Social', 'Share', share_type]); 
        }

        window.mySwipe = new Swipe(document.getElementById('slider'), {
          startSlide: 0,
          speed: 400,
          auto: false,
          continuous: true,
          disableScroll: false,
          stopPropagation: false,
          callback: function(index, elem) {},
          transitionEnd: function(index, elem) {}
        });

        $scope.swiper = function(sel) {
          
          if(sel == 'cash') {
            $scope.featureId = 1;
            mySwipe.slide(0,400)
          } else if(sel == 'transfer') {
            $scope.featureId = 2;
            mySwipe.slide(1,400)
          } else {
            $scope.featureId = 3;
            mySwipe.slide(2,400)
          }
        }

        $scope.submit = function() {
          alert('Oops, something is wrong. Try this later !')
        }


    }
);