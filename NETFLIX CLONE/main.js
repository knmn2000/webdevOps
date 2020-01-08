const tabItems= document.querySelectorAll('.tab-item');
// will put everything in a nodeArray thru whcih we can loop thru
const tabContentItems= document.querySelectorAll('.tab-content-item');


// this will select tab content item
function selectItem(e){
    removeBorder()
    removeShow()
    // add border to current tab
    this.classList.add('tab-border');
    console.log(this.classList)

    //grab content item form DOM

    // when we click on an item, we can get its ID, we can use some trickery here 
    // to accomplish our task of showing the corresponding content

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // this works because of the way we named things, this.id = tab-1, and then adding the -content makes the whole thing  "tab-1-content"

    // add show class
    // console.log(tabContentItem);

    tabContentItem.classList.add('show');
    
}

// border Remover for prev clicked tabs
function removeShow(){
    tabContentItems.forEach(item=> item.classList.remove('show'));
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
