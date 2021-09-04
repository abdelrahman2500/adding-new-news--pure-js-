var inputVal = document.querySelector('[type="text"]'),
addBtn = document.getElementById("add"),
countBtn = document.getElementById("count"),
table = document.getElementById("table"),
counter = document.querySelector("span")
i = 2;

function addRow(){
    if(inputVal.value.trim() != ""){
        // create new row
        var newRow = document.createElement("tr")

        // create new td
        var newNum = document.createElement("td")
        var newText = document.createElement("td")

        newNum.innerHTML = i;
        newText.innerHTML = inputVal.value;

        newRow.appendChild(newNum)
        newRow.appendChild(newText)

        table.appendChild(newRow)

        inputVal.value=""
        inputVal.focus()

        // table.innerHTML += "<tr><td>"+i+"</td><td>" + inputVal.value + "</td></tr>"
        i++
    }
}

function countRows(){
    counter.innerHTML = i-1
}

addBtn.addEventListener("click", addRow)
countBtn.addEventListener("click", countRows)








