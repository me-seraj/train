$(() => {
    // set the select-2 to all select-box
    $("#country").select2();
    $("#state").select2();
    $("#city").select2();

    // DOB select date age > 18+
    var today = new Date();
    today.setFullYear(new Date().getFullYear() - 18);
    $("#dob").datepicker({
        changeMonth: true,
        changeYear: true,
        maxDate: today
    });

    // salary slider
    $(".salary").slider({
        value: 10,
        min: 0,
        max: 1000,
        slide: (e, ui) => {
            $(".val-sal").text("Per Annum : " + ui.value + "K");
        }
    });
    $(".val-sal").text("Per Annum : " + $(".salary").slider("value") + "K");

    // favourite movie multi-select
    $("#fav-movies").select2({
        minimumSelectionLength: 2
    });


    // form validation
    $("form").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            mobile: "required",
            email: {
                required: true,
                email: true
            },
            url: {
                required: true,
                url: true
            },
            gender: "required",
            country: "required",
            state: "required",
            city: "required",
            dob: "required",
            college: "required",
            education: "required",
            company: "required",
            salary: "required",
            "fav-movies": "required",
            "hobbies[]": "required",
            check: "required",
            selectbox: "required"
        },
        submitHandler: function (form) {
            var formData = new FormData(form);
            storeData(form);
            return false;
        }
    });

    // on submitting the form
    function storeData(form) {
        // e.preventDefault();
        var array = $("form").serializeArray();
        var json = {};
        $.each(array, function () {
            json[this.name] = this.value || "";
        });

        // store to local storage
        if (localStorage.getItem("form-data") === null) {
            var formData = [];
            formData.push(json);
            localStorage.setItem("form-data", JSON.stringify(formData));            // localStorage.setItem('added-items', JSON.stringify(json));
        }
        else {
            var formData = JSON.parse(localStorage.getItem('form-data'));
            formData.push(json);
            localStorage.setItem("form-data", JSON.stringify(formData));            // localStorage.setItem('added-items', JSON.stringify(json));
        }
    };
})