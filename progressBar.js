
// let progressBarDATA = [];
let progressBarDATA = [];













// GENERATE progress bar:
function generateProgressBar() {
    
    
    let progressBar = document.querySelector('#progressBar');
    
    let i=0;
    while(i<10) {
        let bar = document.createElement('span');
        
        bar.setAttribute('id','1');
        bar.setAttribute('class','bar');

        progressBar.appendChild(bar);
        // console.log(i);

        i++;
    }



}

generateProgressBar();











// UPDATE progress bar:
function updateProgressBar() {


       
    
    progressBarDATA.forEach((bar, index)=>{
        index++;
        
        
    let progressBarnumber = document.querySelector(`#progressBar :nth-child(${index})`);
    progressBarnumber.style.backgroundColor = bar;

                
                
            });
            

            





}











function resetProgressBar() {
    // console.log('resetting progress bar!!!');
    // alert('RESETTING progress bar!!!!');
    progressBarDATA = [];



// reset background color of all bars:
            
    let progressBars = document.querySelectorAll(".bar");    
    
    progressBars.forEach((bar)=>{

        bar.style.backgroundColor = "rgb(146,146,146)";
    });








            


}




































