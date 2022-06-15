//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

let items = [];
//here we have declared it above because at down it was showing error to it. and here it will store the values
let workItems = [];


const app = express();

app.set('view engine', 'ejs');


app.use(express.static("public"));
//this has to mentioned because

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){



  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // } else {
  //   day = "Weekday";
  // }

  //Now to run for Each day we have to use the switch case

  // switch(currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //         day = "Thursday";
  //         break;
  //       case 5:
  //           day = "Friday";
  //           break;
  //           case 6:
  //             day = "Saturday";
  //             break;
  //             default:
  //             console.log(error);

  // }

  let day = date();
  //IT MEANS THAT THE "let day" will store the Value of the function "()" that is stored in the constant date that was defined above to us.

  res.render("list", { listTitle: day, newListItems: items });
  //by this we are passing the value of listTitle to day in our "list".ejs file
  //by this we are passing the value of kindOfDay to day in our "list".ejs file
  //it actually helped us to not create a very new file for each and every day.

});

app.post("/", function(req, res) {
  let item = req.body.value;
  let workItem = req.body.value;



  //this is basically pushing the item into the items array.
  //and always never forget to declare the letiables into the files


  //now if we push it like this then it will be added to next to it instread on the next line, to overcome this we have to use the for loop.


  //we have used this because we cannot use the res.render outside the app.get() so to push the value outside it we use this.

  // console.log(item);

  //NOW THE BELOW CODE IS FOR THAT BECAUSE WHEN WE CLICK ON THE SUBMIT BUTTON IT WILL PUT THE ENTRY TO THE HOMEROUTE ITSELF.

  if (req.body.list === "Work") {
  workItems.push(workItem);
  res.redirect("/work");
} else {
  items.push(item);
  res.redirect("/");
}
});

app.get("/work", function(req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems});
});

app.listen(3000, function(){
  console.log("Port is running on 3000");
});
