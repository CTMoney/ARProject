$("#subButton").on("click", () => {

    event.preventDefault()
    let email = $("#inputEmail").val().trim()

    $.post("/subscribe", { data: email })
        .then(response => {
            $("#inputEmail").val("")
            console.log(response)
        })

})