function calculateFertilizer() {
    const ph = parseFloat(document.getElementById("ph").value);
    const n = parseFloat(document.getElementById("n").value);
    const p = parseFloat(document.getElementById("p").value);
    const k = parseFloat(document.getElementById("k").value);
    const cropType = document.getElementById("crop-type").value;
    
    let fertilizerType = '';
    let applicationRate = '';

    // Example logic based on N, P, K, and pH values
    if (n < 20) {
        fertilizerType += "Nitrogen Fertilizer (Urea), ";
        applicationRate += "100 lb/acre for Nitrogen, ";
    }

    if (p < 10) {
        fertilizerType += "Phosphorus Fertilizer (MAP), ";
        applicationRate += "50 lb/acre for Phosphorus, ";
    }

    if (k < 100) {
        fertilizerType += "Potassium Fertilizer (KCl), ";
        applicationRate += "150 lb/acre for Potassium, ";
    }

    if (ph < 5.5) {
        fertilizerType += "Lime, ";
        applicationRate += "Apply lime to raise pH, ";
    }

    // Crop-specific recommendations (example)
    if (cropType === "wheat") {
        fertilizerType += "Wheat-specific Fertilizer, ";
        applicationRate += "Apply 80 lb/acre of fertilizer for Wheat.";
    } else if (cropType === "corn") {
        fertilizerType += "Corn-specific Fertilizer, ";
        applicationRate += "Apply 90 lb/acre of fertilizer for Corn.";
    } else if (cropType === "rice") {
        fertilizerType += "Rice-specific Fertilizer, ";
        applicationRate += "Apply 70 lb/acre of fertilizer for Rice.";
    }

    // Display the result
    document.getElementById("fertilizer-type").innerText = "Fertilizer Type: " + fertilizerType.slice(0, -2); // Remove trailing comma
    document.getElementById("application-rate").innerText = "Application Rate: " + applicationRate.slice(0, -2); // Remove trailing comma
}

function downloadPDF() {
    alert('Download PDF functionality to be added.');
}

function printPDF() {
    alert('Print PDF functionality to be added.');
}
