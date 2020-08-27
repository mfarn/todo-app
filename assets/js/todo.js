var lis = document.querySelectorAll("li");
var x = document.querySelectorAll("span");
var input = document.querySelector("input[type='text']");
var ul = document.querySelector("#listOfTasks");

//Highlight elements on click

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });
}

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });
}

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
            var todoText = document.createElement('li');
            todoText.innerHTML = "<span class='close'>X</span> " + this.value; 
            ul.appendChild(todoText);
            input.value = "";
            var close = document.querySelectorAll(".close");

            todoText.addEventListener("mouseout", function() {
                this.classList.remove("selected");
            });

            todoText.addEventListener("mouseover", function() {
                this.classList.add("selected");
            });

            todoText.addEventListener("click", function() {
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



