function formatPhoneNumber(number) {
    const cleaned = ('' + number).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/) || cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
        if (match[1].length === 2 && match[2].length === 2) {
            return `+55 (${match[2]}) ${match[3]}-${match[4]}`;
        }
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return number;
}

function parsePhoneNumber(formatted) {
    return formatted.replace(/\D/g, '');
}

module.exports = {
    formatPhoneNumber,
    parsePhoneNumber
};
