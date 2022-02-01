const fs =require('fs');
const path=require('path')
var myPath=process.argv[2];

var res=[]
fs.readdir(myPath,(error,files)=>{
  files.filter((element)=>{
      if(path.parse(element).ext===("."+process.argv[3]))
      console.log(element)
      return null
    })


  
    
})
