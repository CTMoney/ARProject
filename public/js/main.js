$("#subButton").on("click", () => {

    event.preventDefault()
    let email = $("#inputEmail").val().trim()

    $.post("/subscribe", { data: email })
        .then(response => {
            
            $("#inputEmail").val("")
            console.log(response)
            if (confirm("Would you like to go to AR?")) {
                window.location.replace("/ar")
            }
           
        })

})