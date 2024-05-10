
function getData() {
    var div = document.getElementById('container');
    if (div.innerHTML.length < 10) {
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/pqg4-dm6b.json",
            type: "GET",
        }).done(function (data) {
            var div = document.getElementById('container');

            for (let x = 0; x < data.length; x++) {
                div.innerHTML += `<div style = 'background-color: white; border: black 1px solid; padding: 10px 20px; display: flex; flex-direction:column; margin: 10px; border-radius: 20px'>
                    <h1 style = 'font-size:12px'>${data[x].organizationname}</h1>
                    <p>Website: <a href = '${data[x].url}' target = '_blank'}>${data[x].url}</a></p>
                    <p>Phone: ${data[x].phonenumber}</p>
                    </div>`
            }
        });
    }
    else {
        div.innerHTML = ''
    }


}

// Call getData() function after DOM has loaded
$(document).ready(function () {
    getData();
});