window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            json.sort((a, b) => {
                let keyA = a.hoursInSpace;
                let keyB = b.hoursInSpace;
                if (keyA < keyB) {return -1};
                if (keyA > keyB) {return 1};
                return 0;
            });

            let htmlBody = '';
            let color = '';
            for (let i = 0; i < json.length; i++) {
                json[i].active ? textColor = 'green' : textColor = 'black';
                htmlBody += `
                <div class='astronaut'>
                    <div class='bio'>
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours In Space: ${json[i].hoursInSpace}</li>
                            <li><font color='${textColor}'>Active: ${json[i].active}</font></li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class='avatar' src='${json[i].picture}'>
                </div>
                `;
            }
            // Update HTML here
            const container = document.getElementById('container');
            container.innerHTML = htmlBody;

            const astronautCount = document.getElementById('mainHeader');
            astronautCount.innerHTML += `: ${json.length}`;
        });
    });
});