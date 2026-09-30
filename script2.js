import get_data from "./script.js";


async function print_cards() {
    const data = await get_data();
    // console.log(data);
    return data.forEach(el => {
        const wrapper = document.querySelector('#wrapper');
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML=
            `<div>
                <p><span>Nome</span>: ${el.nome}</p>
                <p><span>Categoria</span>: ${el.categoria}</p>
                <p><span>Prezzo</span>: $${el.prezzo}</p>
            </div>`;

        wrapper.appendChild(div);
    });
}

export default print_cards;