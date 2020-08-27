var lis = document.querySelectorAll("li");
var x = document.querySelectorAll("span");
var input = document.querySelector("input[type='text']");
var ul = document.querySelector("#listOfTasks");

//Linethrough element on click

for (var i = 0; i < lis.length; i++) {
lis[i].addEventListener("click", function() {
    this.classList.toggle("done");
});
}

//Remove Element on click

for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(event) {
        this.parentElement.remove();
        event.stopPropagation();
    });
}

//Create New Element

input.addEventListener("keypress", function(event) {
    if (event.which === 13 ) {
        if(this.value == "") {
            alert("Você deve digitar alguma coisa!")
        } else {
            var todoEl = document.createElement('li');
            todoEl.innerHTML = "<span class='close'><i class='far fa-trash-alt'></i></span> " + this.value; 
            ul.appendChild(todoEl);
            input.value = "";
            var close = document.querySelectorAll(".close");

            todoEl.addEventListener("click", function() {
                this.classList.toggle("done");
            });
            
            for (var i = 0; i < close.length; i++) {
            close[i].addEventListener("click", function(event) {
                this.parentElement.remove();
                event.stopPropagation();
            });
        }  
    }
    }
});



