function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        document.getElementById('result').textContent = 'กรุณากรอกข้อมูลให้ครบถ้วน';
        return;
    }

    const interest = principal * (rate / 100) * years;
    document.getElementById('result').textContent = `ดอกเบี้ยที่ต้องจ่าย: ${interest.toFixed(2)} บาท`;
}
