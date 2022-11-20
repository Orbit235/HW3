$(() => {
    $('.hamburger').click(() => {
        $('.hbl').toggleClass('d-sm-none')
        // $('.hbl').toggleClass('closed')
    })
    $('#form>button').click((e) => {
        e.preventDefault()

        let data = $('#form').serializeArray()

        if (Number(data[0].value) > 4 || Number(data[0].value) < -4) {
            $('.x-error').removeClass("d-none")
        } else {
            $('.x-error').addClass("d-none")
        }
        if (!data[2]) {
            console.log('нету R')
            $('.r-error').removeClass("d-none")

        } else {
            $('.r-error').addClass("d-none")

        }

        console.log(data)
        let x = $('#x')
        console.log(x);
    })
})