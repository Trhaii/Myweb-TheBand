const BuyBtns =  document.querySelectorAll('.js-buy-tickets');
const Modal= document.querySelector('.modal-js');
const CloseBtns =document.querySelectorAll('.close-js');
const ModalContainer =document.querySelector('.ticket-box');

BuyBtns.forEach(buyBtn => {
    buyBtn.addEventListener("click", () => {
        // Code to open or manipulate the modal
        // For example, you might want to add a class to show the modal
        Modal.classList.remove('closed');
        Modal.classList.add('modal-display-js');
    });
});


CloseBtns.forEach(CloseBtn => {

    CloseBtn.addEventListener("click",()=>{
        Modal.classList.remove('modal-display-js');
        Modal.classList.add('closed');
    });
});

Modal.addEventListener("click", ()=> {
    Modal.classList.remove('modal-display-js');
        Modal.classList.add('closed');
});
ModalContainer.addEventListener("click", (event)=> { 
    event.stopPropagation();
});


///bat tat menu
var header =document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
mobileMenu.onclick  = function() {
    var isClosed =header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height= 'auto';
    }
    else 
        header.style.height= null;
}

//tu dong dong sau khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
menuItems.forEach(MenuItem => {
    MenuItem.onclick =function (event) {

        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParent) {

            event.preventDefault();
        }
        else {
            header.style.height= null;
        }
    }
});

