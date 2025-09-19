const pickuplines = ["Are you a pie? Because I’d like a piece of you.","Do you like Pies as id like to make a cream pie with you, within you.","If I buy you dinner, will you be dessert?","You’re so sexy, my zipper is falling for you.","I’m adding you to my to-do list. Can I check you off tonight?","I'd like to take you to the movies but they don't let you bring your own snacks in."];
let pickup_num = pickuplines.length;
document.getElementById("lnum").innerHTML = pickup_num;
function start_pickup() {
    let lover_chosen = document.getElementById("lover_input").value;
    if (lover_chosen <= pickup_num) {
        let np = lover_chosen - 1;
        document.getElementById("input_container").style.display = "none";
        document.getElementById("output_container").style.display = "block";
        document.getElementById("pickup_line").innerHTML = pickuplines[np];};
    
}