
let items = document.querySelectorAll(".item");


items.forEach((item) => {
    item.innerHTML = 0
    let endValue = parseInt(item.getAttribute
    ("data-val"));
    let increament = endValue / 40
    function changeNumber(){
        let value = +item.innerHTML 
        if (value < endValue){
            value +=Math.round(increament)
            item.innerHTML = value
            setTimeout(changeNumber, 100)

        }else {
                item.innerHTML = endValue
        }
    }
    changeNumber()
});