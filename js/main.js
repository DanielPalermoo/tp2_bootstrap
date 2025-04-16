$(document).ready(function () {
    $('.contador').each(function () {
        let $this = $(this);
        let target = +$this.attr('data-target');
        let count = 0;
        let step = Math.ceil(target / 100);
        let interval = setInterval(() => {
            count += step;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            $this.text(count);
        }, 20);
    });
});
