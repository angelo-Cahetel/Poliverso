const bolha = document.getElementById('bolha');

window.onpointermove = (event) => {
    const { clientX, clientY } = event;

    bolha.animate(
        {
        left: `${clientX}px`,
        top: `${clientY}px`
    },
    { duration: 3000, fill: "forwards"}
    );
};