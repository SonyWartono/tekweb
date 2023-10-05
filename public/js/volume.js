document.addEventListener("DOMContentLoaded", function () {
    const shapeSelect = document.getElementById("shapeSelect");
    const shapeInputs = document.getElementById("shapeInputs");
    const inputLabel1 = document.getElementById("inputLabel1");
    const inputLabel2 = document.getElementById("inputLabel2");
    const inputLabel3 = document.getElementById("inputLabel3");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const calculateVolumeButton = document.getElementById("calculateVolume");
    const volumeResult = document.getElementById("volumeResult");

    // Define functions to calculate volume for each shape
    function calculateVolumeCube(sisi) {
        return sisi ** 3;
    }

    function calculateVolumeRectangularPrism(panjang, lebar, tinggi) {
        return panjang * lebar * tinggi;
    }

    function calculateVolumeSphere(jariJari) {
        return (4 / 3) * Math.PI * jariJari ** 3;
    }

    function calculateVolumeCylinder(jariJari, tinggi) {
        return Math.PI * jariJari ** 2 * tinggi;
    }

    function calculateVolumeCone(jariJariDasar, tinggi) {
        return (1 / 3) * Math.PI * jariJariDasar ** 2 * tinggi;
    }

    // Update input fields based on selected shape
    function updateInputFields(selectedShape) {
        const labels = [inputLabel1, inputLabel2, inputLabel3];
        const inputs = [input1, input2, input3];

        labels.forEach((label, index) => {
            label.style.display = index < selectedShape.numInputs ? "block" : "none";
            inputs[index].style.display = index < selectedShape.numInputs ? "block" : "none";
            label.textContent = selectedShape.labels[index] || "";
        });
    }

    // Define shape data
    const shapeData = {
        cube: {
            numInputs: 1,
            labels: ["Sisi:"],
            calculateVolume: calculateVolumeCube,
        },
        rectangularPrism: {
            numInputs: 3,
            labels: ["Panjang:", "Lebar:", "Tinggi:"],
            calculateVolume: calculateVolumeRectangularPrism,
        },
        sphere: {
            numInputs: 1,
            labels: ["Jari-Jari:"],
            calculateVolume: calculateVolumeSphere,
        },
        cylinder: {
            numInputs: 2,
            labels: ["Jari-Jari:", "Tinggi:"],
            calculateVolume: calculateVolumeCylinder,
        },
        cone: {
            numInputs: 2,
            labels: ["Jari-Jari Dasar:", "Tinggi:"],
            calculateVolume: calculateVolumeCone,
        },
    };

    shapeSelect.addEventListener("change", function () {
        const selectedShape = shapeData[shapeSelect.value] || { numInputs: 0 };
        updateInputFields(selectedShape);
    });

    calculateVolumeButton.addEventListener("click", function () {
        const selectedShape = shapeData[shapeSelect.value];
        const values = [
            parseFloat(input1.value),
            parseFloat(input2.value),
            parseFloat(input3.value),
        ];

        if (selectedShape) {
            const volume = selectedShape.calculateVolume(...values);

            if (!isNaN(volume)) {
                volumeResult.textContent = `Volume: ${volume.toFixed(2)} cm³`;
            } else {
                volumeResult.textContent = "Masukkan nilai yang valid untuk menghitung volume.";
            }
        }
    });
});