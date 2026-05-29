let elementItems = document.querySelectorAll(".big a");

for (let item of elementItems) {

    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'black';
        item.style.color = 'blue';
        item.style.cursor = 'pointer';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
        item.style.color = '';
    });
    item.addEventListener('click', ()=>{
        alert("You have clicked")
    })

}

