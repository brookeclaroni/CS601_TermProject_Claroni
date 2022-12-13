window.onload = function () {
        fetch('https://63985722044fa481d699c33f.mockapi.io/degrees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                var htmlMarkups = '';
                data.degrees.forEach((element) => {
                    const htmlMarkup = `<div class="degree"><h3 class="school">${element.school}</h3><p class="major">Major: ${element.major}</p><p class="type">Type: ${element.type}</p><p class="year">Year Conferred: ${element.year_conferred}</p></div>`;
                    htmlMarkups += htmlMarkup;
                });
                document.getElementById("degree_data").innerHTML = htmlMarkups;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
}