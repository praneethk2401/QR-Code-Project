import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
inquirer
  .prompt([
    {message:"Type in your URL" // prompting the user to enter the URL
    ,name:"URL" // storing the typed url in a variable called name
}])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url); // calling the qr-image package to convert the url to qr
    qr_svg.pipe(fs.createWriteStream("message.png")); // creating the qr with the name message.png
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

