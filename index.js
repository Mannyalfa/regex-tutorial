//set up test text field
const textField = ["We the People of the United States, in Order to form a a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to to ourselves and our Posterity, do ordain and establish this Constitution for for the United States of America."];
//setup and define the Regex to validate the
const regex = new RegExp(/\b(\w+)\s+\1\b/, 'i')
//console log test results
textField.forEach(textField => console.log(textField, regex.test(textField)));