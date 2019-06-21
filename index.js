var accordeon = document.querySelector('.accordeon');
accordeon.onclick = changeItemsState;
var state = {};
state.active = null;

function setState(selItem){
    state.active = state.active != selItem ? selItem : null;
    updateItems();
}

function updateItems(){
    var items = document.querySelectorAll('.accordeon__item');
    for(let i=0; i<items.length; i++){
        if (state.active == items[i]){
            items[i].children[1].className = "accordeon__content";
        }else{
            items[i].children[1].className = "accordeon__content closed";
        }
    }
}

function changeItemsState(){
    var selectedItem = event.target.parentElement;
    setState(selectedItem);
}
