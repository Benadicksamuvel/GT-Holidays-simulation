function showMessage() {
    let booking = document.getElementById('last');
    booking.style.display = "block"; 
}// Show the booking section
function showMessage(event) {
    event.preventDefault(); // Prevent default form submission

    let formSection = document.getElementById('last'); // Form wrapper
    let btn = document.getElementById('btn2');          // Return button
    let res = document.getElementById('response');  
    let mes = document.getElementById('mess');          // Message display

    formSection.style.display = "none"; // Hide the form section
    res.innerHTML = "<center>Thanks for contacting us! We will be in touch with you shortly.</center>";
    res.style.color = "green";
    res.style.backgroundColor = "#cbf4f8";

    btn.innerHTML = "Return to Home";
    btn.style.backgroundColor = "#0077b6";
    btn.style.color = "white";
    btn.style.padding = '20px';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.width = '270px';
    btn.style.fontSize = '16px';
    btn.style.display = 'inline-block'; // Show the button

    mes.style.backgroundColor = "#cbf4f8";
    mes.style.padding = '20px';

    btn.addEventListener('click', function () {
        window.location.href = "index.html";
    });

}

document.querySelector('form').addEventListener('submit', showMessage);
