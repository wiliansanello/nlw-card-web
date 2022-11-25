let isIgnite = true;

function changeCard(event){
    const card = event.currentTarget;
    const bg = isIgnite
        ? "explorer"
        : "ignite";
    const color = isIgnite
        ? "#940303"
        : "#D6D3D3";
    isIgnite = !isIgnite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`;
    card.style.border = color;
    card.style.color= color;
}
