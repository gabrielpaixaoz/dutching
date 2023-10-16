function calculateDutching() {
    const totalStake = parseFloat(document.getElementById("total-stake").value);
    const selections = document.querySelectorAll(".selection");
    let totalProbability = 0;
    let results = [];

    selections.forEach(selection => {
        const odds = parseFloat(selection.querySelector(".odds").value);
        const probability = 1 / (odds + 1);
        totalProbability += probability;
        results.push({
            selection: selection.querySelector(".name").textContent,
            stake: (totalStake * probability / totalProbability).toFixed(2)
        });
    });

    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2>";
    results.forEach(result => {
        resultsDiv.innerHTML += `<p>${result.selection}: $${result.stake}</p>`;
    });
}

// Add selection dynamically
const selectionsDiv = document.getElementById("selections");
selectionsDiv.innerHTML = "<h2>Selections</h2>";
for (let i = 1; i <= 3; i++) {  // You can change the number of selections here
    selectionsDiv.innerHTML += `
        <div class="selection">
            <label for="selection-${i}">Selection ${i}:</label>
            <input type="text" class="name" value="Selection ${i}">
            <label for="odds-${i}">Odds:</label>
            <input type="text" class="odds" value="2.00">
        </div>
    `;
}
