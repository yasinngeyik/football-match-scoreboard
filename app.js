let skorA = 0;
let skorB = 0;
let nameTeam1 = "TEAM A"
let nameTeam2 = "TEAM B"
//  A team event

document.getElementById("golA").addEventListener("click", () => {
    skorA++;
    document.getElementById("newNameA").textContent = skorA
});

document.getElementById("goalminusA").addEventListener("click", () => {
    if (skorA > 0) {
        skorA--
        document.getElementById("newNameA").innerHTML = skorA;
    }

});

// b team event
document.getElementById("golB").addEventListener("click", () => {
    skorB++
    document.getElementById("newNameB").innerHTML = skorB
});

document.getElementById("goalminusB").addEventListener("click", () => {
    if (skorB > 0) {
        skorB--
        document.getElementById("newNameB").innerHTML = skorB;
    }
});
//  a team skorbord sonuç seçme
document.getElementById("firstOverallScore").addEventListener("click", () => {
    setTimeout(() => {
        const firstWriteName = prompt("skor giriniz")
        console.log(firstWriteName);
        if (firstWriteName > 0) {
            skorA = firstWriteName
            skorA = parseInt(firstWriteName)
            document.getElementById("newNameA").innerText = skorA
        } else {
            alert("SADECE RAKAM GİRİN!!")
        };

    }, 0)
});

// b takım skorbord sonuç seçme
document.getElementById("secondOverallScore").addEventListener("click", () => {
    setTimeout(() => {
        const secondWriteName = prompt("skor giriniz")
        console.log(secondWriteName);
        if (secondWriteName > 0) {
            skorB = secondWriteName
            skorB = parseInt(secondWriteName)
            document.getElementById("newNameB").innerHTML = skorB
        } else {
            alert("SADECE RAKAM GİRİN!!")
        }
    }, 0)
});


// takım adı degiştime

document.getElementById("firstWriteFootballTeam").addEventListener("click", () => {
    nameTeam1 = prompt("Takım İsmi Giriniz").toUpperCase();
    document.getElementById("firstTeamName").innerText = nameTeam1;
    console.log(nameTeam1);

});
document.getElementById("secondWriteFootballTeam").addEventListener("click", () => {
    nameTeam2 = prompt("takım adı giriniz").toUpperCase();
    document.getElementById("SecondTeamName").innerText = nameTeam2;
    console.log(nameTeam2);
});

// skor belirleme
document.getElementById("whoWon").addEventListener("click", () => {

    if (skorA > skorB) {
        alert(nameTeam1 + " " + "WİN")
    } else if (skorB > skorA) {
        alert(nameTeam2 + " " + "Win")
    } else {
        alert("Draw")
    }
})
