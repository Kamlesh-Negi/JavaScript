/* Syntax 

 switch(key) {
case value1:
    statement
    break;
case value2:
    statement
    break;
    default:
        break;
*/

const month = 12;
switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default month set to August");                
}