# Project 1st of 4
## project Link
[click here](https://prakalppandey.github.io/project4in1/project1/project1.html)
# Solution code 
## Way one
```javascript
 function colour11(textbox){
       document.querySelector('.container').style.backgroundColor = textbox;
    }
```
## Way Two
```javascript
 const anchor = document.querySelectorAll('a');
   const containercolor = document.querySelector('.container');

   anchor.forEach(function(a){
      a.addEventListener('click',function(event){
         if(event.target.id === 'Darkgoldenrod'){
            containercolor.style.backgroundColor = event.target.id
         }
         if(event.target.id === 'Crimson'){
            containercolor.style.backgroundColor = event.target.id
         }
         if(event.target.id === 'Bisque'){
            containercolor.style.backgroundColor = event.target.id
         }
         if(event.target.id === 'Khaki'){
            containercolor.style.backgroundColor = event.target.id
         }
      })
  
   })
```
