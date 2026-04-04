const Email = document.getElementById("Email");
const PhoneNumber = document.getElementById("PhoneNumber");
const CommissionType = document.getElementById("CommissionType")
const CommissionDetails = document.getElementById("CommissionDetails");
const Submit = document.getElementById("Button");

function redirect() {
    alert("Commission request sent! Please wait for a reply.");
    location.reload();
}

async function checkData() {
    if (
        !Email.value.trim() ||
        !PhoneNumber.value.trim() ||
        !CommissionType.value.trim() ||
        !CommissionDetails.value.trim()
    ) {
        alert("Please fill all the blanks");
        return;
    }

    await sendData();
    redirect();
}

async function sendData() {
    const data = {
        Email: Email.value,
        PhoneNumber: PhoneNumber.value,
        CommissionType: CommissionType.value,
        CommissionDetails: CommissionDetails.value
    };

    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send commission request. Please try again.');
    }
}

Submit.addEventListener("click", checkData);