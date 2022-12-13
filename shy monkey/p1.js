const closedmonkey = document.querySelector('.closed')
const openmonkey = document.querySelector('.open')

// add event listener 
closedmonkey.addEventListener('click', () => {
    if(openmonkey.classList.contains('open')){
        openmonkey.classList.add('active');
        closedmonkey.classList.remove('active');
    }
});

openmonkey.addEventListener('click' , () => {
    if(closedmonkey.classList.contains('closed')){
        closedmonkey.classList.add('active');
        openmonkey.classList.remove('active');
    }
});