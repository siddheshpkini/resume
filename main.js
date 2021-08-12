const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () =>{
    selectElement('header').classList.toggle('active');
});

selectElement('#contactNumber').addEventListener('click', () =>{
    navigator.clipboard.writeText('+916361986671');
    alert('+916361986671 : Copied to clipboard');
});