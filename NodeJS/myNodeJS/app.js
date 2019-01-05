// var x=12;
// var y=12;
// var z=x+y;
// console.log(z);


// const ModuleOS=require('os'); //os is a module to get the user details, require is a function
// const ModuleFS=require('fs'); //fs is a module to get the file system detials
// var MyUser=ModuleOS.userInfo(); //userinfo is a function to get the details
// ModuleFS.appendFile('hello.txt', 'Welcome to Node'), //appendfile is a function, it will create additionla file called hello.txt if it dones note exist

// // function(err){

// //     if(err) throw err; //if err happens then prompt the error
// //     console.log('File saved successfully')
// // };



// console.log(ModuleFS); //to display the inbuilt functions
// console.log(ModuleOS);

const MyModule=require('./students.js') //import the module from another file
var name=MyModule.getStudent(); //import the function from the module
console.log(name);

// const MyModule1=require('./add.js');
// var Result=MyModule1.getResult(10,20);
// console.log(Result);

// const _=require('lodash'); // refer https://lodash.com/docs/4.17.11#uniq 
// var myArray=_.uniq(['Jayan', 'ABC', 'ABC','Jayan','123', 'ICTA','ICTA']);
// console.log(myArray);





