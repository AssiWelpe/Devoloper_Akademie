// Warten, bis der DOM (die HTML-Struktur der Seite) vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {

    /**
     * Funktion zum Aktualisieren der Zutaten basierend auf der Anzahl der Portionen
     */
    window.updateRecipe = () => {
        // Zugriff auf das Input-Feld, in dem die Anzahl der Portionen eingegeben wird
        const portionInput = document.getElementById("portionInput");

        // Den Wert aus dem Input-Feld holen und in eine Zahl umwandeln
        const newPortions = parseInt(portionInput.value, 10);

        // Validierung: Prüfen, ob die Eingabe gültig ist (eine Zahl und größer als 0)
        if (!isNaN(newPortions) && newPortions > 0) {
            // Alle Zutatenmengen auswählen
            const ingredientItems = document.querySelectorAll(".ingredient-item .ingredient-quantity");

            // Jede Zutat durchgehen und die Menge anpassen
            ingredientItems.forEach(item => {
                // Ursprüngliche Menge aus dem Attribut 'data-base' abrufen
                const baseQuantity = parseFloat(item.getAttribute("data-base"));

                // Die Maßeinheit (z. B. "g", "ml") aus dem Attribut 'data-text' abrufen
                const unit = item.getAttribute("data-text") || "";

                // Überprüfen, ob die ursprüngliche Menge definiert ist und eine Zahl ist
                if (!isNaN(baseQuantity)) {
                    // Neue Menge berechnen: Basismenge auf Basis von 4 Portionen anpassen
                    const newQuantity = (baseQuantity / 4) * newPortions;

                    // Neue Menge in das HTML-Element schreiben
                    // `.toFixed(2)` sorgt für 2 Nachkommastellen, `.replace()` entfernt unnötige ".00"
                    item.textContent = `${newQuantity.toFixed(2).replace(/\.00$/, "")}${unit}`;
                }
            });
        } else {
            // Fehlermeldung, falls die Eingabe ungültig ist
            alert("Bitte eine gültige Anzahl von Portionen eingeben!");
        }
    };
});
