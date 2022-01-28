$(() => {
    $("form").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            url: {
                required: true,
                url: true
            },
            sex: "required",
            check: "required",
            selectbox: "required"
        }
    });
})