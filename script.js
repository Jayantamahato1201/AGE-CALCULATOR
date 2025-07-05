document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);
    const resultDiv = document.getElementById('result');

    // Input validation
    if (!isValidDate(day, month, year)) {
        resultDiv.textContent = 'Please enter a valid date of birth.';
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
        resultDiv.textContent = 'Date of birth cannot be in the future.';
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        // Get days in previous month
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.textContent = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
});

function isValidDate(day, month, year) {
    if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1) return false;
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
} 