function entity($scope){
    
    
    
    $scope.read=function(){
        $.ajax({
            
            url:'/readEntity.json',
                
                data:null,
                
                type:'GET',
              //  ,fail:function(){alert();},
                success:function(data){
                
                console.log(data);
                
               }});
    }
//     $scope.create=function(){
//             $.ajax({
//            
//            url:'',
//                
//                data:,
//                
//                type:'',
//                
//                success:function(data){
//                
//                
//                
//               }});
//     }
//      $scope.update=function(){
//              $.ajax({
//            
//            url:'',
//                
//                data:,
//                
//                type:'',
//                
//                success:function(data){
//                
//                
//                
//               }});
//      }
//       $scope.delete=function(){
//               $.ajax({
//            
//            url:'',
//                
//                data:,
//                
//                type:'',
//                
//                success:function(data){
//                
//                
//                
//               }});
//       }
    
}