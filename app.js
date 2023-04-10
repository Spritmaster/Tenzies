

const gridContainer =document.querySelector(".grid")
const rools =document.querySelector("button")

rools.addEventListener("click" ,function(){
    

})

let numbers=[]
let selectedNumber;
function createItem(text) {
    const gridItem =document.createElement("div");

    gridItem.textContent  = text;
    gridItem.addEventListener("click" ,function () {
        if(selectedNumber){
            if(selectedNumber == gridItem.textContent){
                gridItem.classList.add("green")
                numbers.forEach(function (el) {
                    if(el.id ==gridItem.id) {
                        el.selected =true
                    }
                });
            }
        }
        else{
            selectedNumber =gridItem.textContent * 1
        gridItem.classList.add("green")
        numbers.forEach(function (el) {
            if(el.id ==gridItem.id) {
                el.selected =true
            }
        })
        }
    })

    return gridItem
}

function createItem(text) {
    const gridItem =document.createElement("div");

    gridItem.textContent  = text;
    gridItem.addEventListener("click" ,function () {
        if(selectedNumber){
            if(selectedNumber == gridItem.textContent){
                gridItem.classList.add("green")
                numbers.forEach(function (el) {
                    if(el.id ==gridItem.id) {
                        el.selected =true
                    }
                });
            }
        }
        else{
            selectedNumber =gridItem.textContent * 1
        gridItem.classList.add("green")
        numbers.forEach(function (el) {
            if(el.id ==gridItem.id) {
                el.selected =true
            }
        })
        }
    })

    return gridItem
}

let random10 = () =>Math.ceil(Math.random() * 10)

function startGame() {
    for (let i=0;i<10;i++){
        let son =random10();
        let gridItem =createItem(son)
       gridContainer.append(gridItem)
        numbers.push({
    id:i,
    son:son,
    selected:false,
});
}
}
startGame()


