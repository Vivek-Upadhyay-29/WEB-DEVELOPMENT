/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import qr from "qr-image";
import inquirer from 'inquirer';
inquirer
  .prompt([
    {
    message : "Type in your URL", 
    name :"URL" 
},
])
  .then((answers) => {
    // Use user feedback for... whatever!!
   const url = answers.url;
   var qr_svg = qr.image(ur);
   qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });