const counters = document.querySelectorAll('.contador');
const speed = 500; 

counters.forEach(counter => {
    const updateCoutn = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCoutn, 1); 
        }else{
            count.innerText=target;

        } 
    }

    updateCoutn();

});