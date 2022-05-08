console.clear();
let counter = 0;




async function getTrivia() {


    let response = await fetch('https://opentdb.com/api.php?amount=10');
    let data = await response.json();

    data = data.results;
    console.log(data[counter]);

    



}



getTrivia()




































