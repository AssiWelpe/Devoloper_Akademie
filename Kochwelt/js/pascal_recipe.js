function updateRecipe() {
    // Die Portionsgröße aus dem Eingabefeld abrufen
    const portionSize = parseFloat(document.getElementById("portionInput").value);

    // Eingabe überprüfen
    if (isNaN(portionSize) || portionSize < 1) {
        alert("Bitte geben Sie eine gültige Portionsgröße ein (mindestens 1).");
        return;
    }

    // Die Rezept-Tabelle abrufen
    const table = document.getElementById("recipeTable");

    // Alle Zeilen im Tabellenkörper durchgehen
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        const element = row.querySelector("td[data-base]");
        // Basiswert und Textbeschreibung abrufen
        const baseAmount = parseFloat(element.dataset.base);
        const text = element.dataset.text;

        // Prüfen, ob die Zutat eine numerische Basis hat
        if (!isNaN(baseAmount) && baseAmount > 0) {
            // Neue Menge berechnen
            const newAmount = baseAmount * portionSize;

            // Die Zelle mit der neuen Menge aktualisieren
            if (text) {
                element.innerText = `${newAmount} ${text}`;
            } else {
                element.innerText = `${newAmount}`;
            }
        } else if (text) {
            // Wenn es keine numerische Basis gibt, den Text beibehalten (z. B. "etwas", "nach Geschmack")
            element.innerText = text;
        }
    });
}
