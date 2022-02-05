$(() => {
    // Listing Page JS codes
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        items: 1,
    });

    // dynamic listing
    function dynamic_list(){
        var formData = JSON.parse(localStorage.getItem('form-data'));
        var allRows = "";
        $.each(formData, function (i, key) {
            allRows += `<tr><td>${key.firstname} ${key.lastname}</td>
            <td>${key.mobile}</td>
            <td>${key.email}</td>
            <td>${key.gender}</td>
            <td>${key.country}</td>
            <td>${key.state}</td>
            <td>${key.city}</td>
            <td>${key.dob}</td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" data-index="${i}" class="delete-item" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" /></svg>
            </td>
        </tr>`;
        });
        $(".listing table tbody").html(allRows);
        del_list();
    }
    dynamic_list();

    // delete item
    function del_list(){
        $(".delete-item").on("click", (obj) => {
            var formData = JSON.parse(localStorage.getItem('form-data'));
            formData.splice($(obj.target).data("index"), 1);

            localStorage.setItem("form-data", JSON.stringify(formData));
            dynamic_list();
        })
    }
});