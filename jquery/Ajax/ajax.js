$(document).ready(() => {
    var country = {
        "IN":"India",
        "US":"United States",
        "DE":"Germany"
    };
    
    var state = {
        "IN":["Guj","Raj", "UP"],
        "US":["Manhattan","Carolina"],
        "DE":[""]
    };
    
    var city = {
        "Guj":["Ahm","Rajkot","Bhavnagar"],
        "Raj":["jaipur","Udaipur"],
        "UP":["Hyd", "Lucknow", "Ghaziabad"]
    };

    // $.ajax({
    //     url: "country.json",
    //     success: (data){
    //         alert();
    //     }
    // })

    var options = '<option value="" selected disabled>Select any State</option>';

    $.each(country, (i, val) => {
        options += '<option value="' + i + '">'+ val +'</option>'
    })
    $("#country").html(options);
    
    var sel_Country, sel_State, sel_City;
// for country
    $("#country").on("change", (obj) => {
        sel_Country = $(obj.target).find(":selected").val();

        if(sel_Country != ""){
            $("label").text("State");
            var options = '<option value="" selected disabled>Select any State</option>';

            $.each(state[sel_Country], (i, val) => {
                options += '<option value="' + val + '">'+ val +'</option>'
            })
            $("#country").html(options);
            $("#country").attr("id", "state");
            $.fn.state();
        }
    })


// for state
$.fn.state = function(){
    $("#state").on("change", (obj) => {
        sel_State = $(obj.target).find(":selected").val();

        if(sel_State != ""){
            $("label").text("City");
            var options = '<option value="" selected disabled>Select any City</option>';

            $.each(city[sel_State], (i, val) => {
                options += '<option value="' + val + '">'+ val +'</option>'
            })

            $("#state").html(options);
            $("#state").attr("id", "city");
            $.fn.city();
        }
    })
}


// for city
$.fn.city = function(){
    $("#city").on("change", (obj) => {
        sel_City = $(obj.target).find(":selected").val();
        if(sel_City != ""){
            alert("Hello user! You are from " + sel_City + ", " + sel_State + ", " + sel_Country + ".")
        }
    })
}
});