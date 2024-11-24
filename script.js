function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function calculate() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const d = parseFloat(document.getElementById('d').value);
    const x = parseFloat(document.getElementById('x').value);

    // Validasi input
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(x)) {
        document.getElementById('result').innerText = "Masukkan nilai yang valid untuk semua koefisien dan variabel.";
        return;
    }

    // Menghitung f(x) dan langkah-langkahnya
    const fx = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;

    // Langkah-langkah perhitungan
    // Function to format terms, adding the proper sign
function formatTerm(coefficient, variablePart) {
    if (coefficient > 0) {
        return `+ ${coefficient}${variablePart}`;
    } else if (coefficient < 0) {
        return `- ${Math.abs(coefficient)}${variablePart}`;
    } else {
        return `+ 0${variablePart}`; // Handle the zero case
    }
}

// Format the steps string
let steps = `
    <strong><br>Langkah-langkah perhitungan:</strong><br>
    Fungsi yang diberikan adalah:<br>
    f(x) = ${a}x³ ${formatTerm(b, 'x²')} ${formatTerm(c, 'x')} ${formatTerm(d, '')}<br><br>
    Substitusi x = ${x}:<br>
    f(${x}) = ${a}(${x})³ ${formatTerm(b, `(${x})²`)} ${formatTerm(c, `(${x})`)} ${formatTerm(d, '')}<br>
    = ${a} * ${Math.pow(x, 3)} ${formatTerm(b,'')} * ${Math.pow(x, 2)} ${formatTerm(c,'')} * ${Math.pow(x, 1)} ${formatTerm(d, '')}<br><br>
    Menghitung setiap bagian:<br>
    ${a} * ${Math.pow(x, 3)} = ${a * Math.pow(x, 3)}<br>
    ${b} * ${Math.pow(x, 2)} = ${b * Math.pow(x, 2)}<br>
    ${c} * ${x} = ${c * x}<br>
    ${d} = ${d}<br><br>
    Jumlahkan hasilnya:<br>
    f(${x}) = ${a * Math.pow(x, 3)} ${formatTerm(b * Math.pow(x, 2), '')} ${formatTerm(c * x, '')} ${formatTerm(d, '')}<br>
    = ${fx}<br>
`;

console.log(steps);


    document.getElementById('steps').innerHTML = steps;

    // Menampilkan hasil
    document.getElementById('result').innerText = `Hasil: f(${x}) = ${fx}`;
}
