  var app = Sammy(function() {
//        this.get('#/add:id', function() {
//         alert( this.params['id'])
//         
//         $("#main").append("fdfdf").fadeIn();
//        });
        this.get('#/add', function() {
        $('.view').hide();
         $(".add").fadeIn();
         //inc(".add");
        });
        this.get('#/read', function() {
      //  alert();  
        
            scope.load();
         $('.view').hide();
         $(".read").fadeIn();
           //     $(".read").appear();
// $('.read').on('appear', function() {
//    console.log("كله تام");
//    });
       //  inc(".read");
         
        });
       
      })
              
      jQuery(function() {
        app.run("#/read");
      });


//  $(".read").appear();
//  $('.read').on('appear', 'section h3', function(e, $affected) {
//    // this code is executed for each appeared element
//    //$(this).yellowFade();
//debugger;
//   // $appeared.empty();
//    $affected.each(function() {
//      alert(this);
//    })
//  });

//var $appeared=$('.read');
//$appeared.appear();
// $('.read img').on('appear', function(event, $all_appeared_elements) {
//      // this element is now inside browser viewport
//   alert("")
//    });







var scope;
var http;
function wwe($scope,$http,$location){
    http=$http
    scope=$scope;
    $scope.one={};
$scope.load=
    function(){
      // debugger;
//    $http.get("https://api.mongolab.com/api/1/databases/wwe/collections/wwedata/?apiKey=b79etr8Qn0rxFEcZVcsIGRywaX0j0b44").success(function(data){
//$scope.news=data;
//        $scope.$apply();
// setTimeout(function(){inc(".read");},10);
//}).error(function(){alert('erro')})
   if(!scope.news){
 
  $.ajax({
        url:"https://api.mongolab.com/api/1/databases/wwe/collections/wwedata/?apiKey=b79etr8Qn0rxFEcZVcsIGRywaX0j0b44",
            success:function(data){
$scope.news=data;
                $scope.$apply();
 setTimeout(function(){
     
    // inc(".read");
     
   
        $("img").unveil();
  
    
 
 },10);
}});
   } 
};    
    
    
$scope.add=function(obj){
if(obj.hasOwnProperty('_id')){
$scope.update(obj);
    return;
}
$scope.disabled=true;
$.ajax( { url: "https://api.mongolab.com/api/1/databases/wwe/collections/wwedata?apiKey=b79etr8Qn0rxFEcZVcsIGRywaX0j0b44",
          data: JSON.stringify( obj ),
          type: "POST",
          contentType: "application/json" ,
         success:function(){
          
          $scope.news.push(obj);
            // $scope.$apply();
             $scope.one={};
             $scope.disabled=false;
              window.location='#/read'
                $("img").unveil();
             $scope.$apply();
          }} );

}

$scope.delete=function(obj,i){

$scope.delDisabled=true;
$.ajax( { url: "https://api.mongolab.com/api/1/databases/wwe/collections/wwedata/"+obj._id.$oid+"?apiKey=b79etr8Qn0rxFEcZVcsIGRywaX0j0b44",
          data: JSON.stringify( obj ),
          type: "DELETE",         
         success:function(){
          
          $scope.news.splice(i,1);         
             $scope.delDisabled=false;
             $scope.$apply();
          }} );

}
$scope.update=function(obj){
   $scope.disabled=true;
  //  debugger;
//var store=Object.create(obj);
//
//    $.ajax( { url: "https://api.mongolab.com/api/1/databases/my-db/collections/my-coll/4e7315a65e4ce91f885b7dde?apiKey=myAPIKey",
//          data: JSON.stringify( { "x" : 2 } ),
//          type: "PUT",
//          contentType: "application/json" } );
    var objstring=JSON.stringify(obj);
       $.ajax( { url: "https://api.mongolab.com/api/1/databases/wwe/collections/wwedata/"+obj._id.$oid+"?apiKey=b79etr8Qn0rxFEcZVcsIGRywaX0j0b44",
               
          data: JSON.stringify({"title":obj.title,"body":obj.body,"img":obj.img}),
          type: "PUT",
          contentType: "application/json",
            
             success:function(){
          
          $scope.news[$scope.news.indexOf(obj)]=obj;         
            $scope.disabled=false; 
                 $scope.one={};
                   window.location='#/read'
                     $("img").unveil();
             $scope.$apply();
            }} );
    
    
}
$scope.viewEdit=function(x){
$scope.one=x;
    window.location='#/add'
   // console.log($scope.one);

}



 
              

}

//to load images sequnitial 
//function inc (selector,i){var i=i||0;console.log(i);
//
//$(selector+" img").eq(i).attr('src',$(selector+" img").eq(i).attr('fakeSrc'));
//
//if(i<$(selector+" img").length){
//
//   var item= $(selector+" img").eq(i);
//   
//    item.on("load",function(){inc(selector,++i);})
//    item.on('error',function(){inc(selector,++i);})
//    ;}else{
//    setInterval(function(){$(selector+" img").each(function(){$(this).attr('src',$(this).attr('fakeSrc'))})},1000)
//    }
//                                                          }

