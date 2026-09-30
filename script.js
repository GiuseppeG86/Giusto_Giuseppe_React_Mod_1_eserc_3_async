async function get_data() {
    const response= await fetch('./prodotti.json');
    const data = await response.json();
    return data;
}

export default get_data;