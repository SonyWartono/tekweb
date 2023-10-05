document.addEventListener("DOMContentLoaded", function () {
    const hitungFiboBtn = document.getElementById("hitungFibo");
    const hasilFibo = document.getElementById("hasilFibo");
    

    hitungFiboBtn.addEventListener("click", () => {
        const n = parseInt(document.getElementById("fiboNum").value);
        const result = hitungFibo(n);
        if (isNaN(n) || n <= 0) {
            hasilFibo.textContent = "Masukkan bilangan bulat positif.";
        } 
        else {
            const result = hitungFibo(n);
            hasilFibo.textContent = `Deret Fibonacci: ${result.join(", ")}`;
        }
    });

    function hitungFibo(n) {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];

        const urutanFibo = [0, 1];
        for (let i = 2; i < n; i++) {
            urutanFibo.push(urutanFibo[i - 1] + urutanFibo[i - 2]);
        }
        return urutanFibo;
    }
});