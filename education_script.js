window.onload = function () {
        fetch('https://6378172d5c477765122c0fb4.mockapi.io/degrees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                var degreeData = document.getElementById("degree_data");
                if (degreeData != null) {
                    var htmlMarkups = '';
                    data.degrees.forEach((element, index) => {
                        const htmlMarkup = '<div class="degree"><h3>Degree '+(index+1)+'</h3><p class="school">School: '+element.school+'</p><p class="major">Major: '+element.major+'</p><p class="type">Type: '+element.type+'</p><p class="year">Year Conferred: '+element.year_conferred+'</p></div>';
                        htmlMarkups+=htmlMarkup;
                    });
                    document.getElementById("degree_data").innerHTML = htmlMarkups;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
}