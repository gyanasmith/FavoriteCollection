let songs = [];

window.onload = function(){
    displayTable();
}

document.getElementById("btnSubmit").onclick = function(){
    let title = document.getElementById("txtTitle").value;
    let singer = document.getElementById("txtSinger").value;
    let mood = document.getElementById("txtMood").value;

    if (title && singer && mood) {
        let obj = {
            name: title,
            singer: singer,
            mood: mood
        };
        songs.push(obj);

        // Clear input fields
        document.getElementById("txtTitle").value = "";
        document.getElementById("txtSinger").value = "";
        document.getElementById("txtMood").value = "";

        // Update the table
        displayTable();
    }
}

function displayTable() {
    let tableBody = document.getElementById("songTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing rows

    songs.forEach(function(song) {
        let row = document.createElement("tr");

        let cellTitle = document.createElement("td");
        cellTitle.textContent = song.name;
        row.appendChild(cellTitle);

        let cellSinger = document.createElement("td");
        cellSinger.textContent = song.singer;
        row.appendChild(cellSinger);

        let cellMood = document.createElement("td");
        cellMood.textContent = song.mood;
        row.appendChild(cellMood);

        tableBody.appendChild(row);
    });
}
