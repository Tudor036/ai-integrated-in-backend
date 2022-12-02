const header = document.getElementById('analisys-header');
const description = document.getElementById('analisys-description');
const form = document.getElementById("upload-form");
const inputFile = document.getElementById("image");

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener('submit', formSubmitEventHandler);
})

async function formSubmitEventHandler(e) {
    e.preventDefault();
    header.textContent = '';
    
    const endpoint = `${window.location}/recognise`;
    const formData = new FormData();
    
    formData.append('image', inputFile.files[0]);
    
    const analisysResultJson = await fetch(endpoint, {
        method: 'post',
        body: formData
    })
    
    const analisysResult = await analisysResultJson.json();
    const { data } = analisysResult;
    
    analisysResult.hasOwnProperty('data') ? showAnalisysResult(data) : showFetchError();
    // form.reset();
}

function showAnalisysResult(data) {
    header.textContent = 'Analisys Results';
    description.textContent = `This most probably is a/an ${data[0].name} ${data[0].confidence}`;
}

function showFetchError() {
    header.textContent = '';
    description.textContent = "Something went wrong!";
}

