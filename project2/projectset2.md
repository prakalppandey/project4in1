# Project 1st of 4
## project Link
[click here](https://stackblitz.com/~/github.com/prakalppandey/project4in1)
# Solution code 

## Javascript
```javascript
 function shownumber(){
    const shownum1 = parseInt(document.getElementById("Heightnumber").value);
    document.getElementById("Height-val").textContent = shownum1 + " Cm"

    const shownum2 = parseInt(document.getElementById("Weightnumber").value);
    document.getElementById("Weight-val").textContent = shownum2 + " kg"

}

const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const heightval = parseInt(document.getElementById("Heightnumber").value);
    const weightval = parseInt(document.getElementById("Weightnumber").value);
    const bmi= weightval/((heightval*heightval)/10000).toFixed(2);
    document.getElementById("result").innerHTML = Math.round(bmi) ;
})

function change1(){
    document.getElementById("para").innerHTML ='<p id="para"><b>Females</b> tend to have a slightly higher BMI than males. This is partly due to differences in body composition, as females generally have a higher percentage of body fat compared to males.</p>';
}
function change2(){
    document.getElementById("para").innerHTML ='<p id="para"><b>Males</b> generally have a higher percentage of muscle mass compared to females, which can influence BMI. Muscle tissue is denser than fat tissue, so individuals with more muscle mass may have a higher BMI even if their body fat percentage is low.</p>';
}
function change3(){
    document.getElementById("para").innerHTML ='<p id="para">BMI does not account for differences in body fat distribution. For instance, two individuals with the same BMI may have different patterns of fat distribution, and this can have implications for health.</p>';
}

```