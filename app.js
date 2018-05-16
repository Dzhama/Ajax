document.querySelector('#button1').addEventListener('click', loadCustomer);
document.querySelector('#button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    console.log(e);
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if(this.status === 200) {
            // console.log(this.responseText);
            const costumer = JSON.parse(this.responseText);
            
            const output = `
                <ul>
                    <li>ID: ${costumer.id}</li>
                    <li>Name: ${costumer.name}</li>
                    <li>Company: ${costumer.company}</li>
                    <li>Phone: ${costumer.phone}</li>
                </ul>
            `;

            document.querySelector('.customer').innerHTML = output;
            
        }else {
            console.log(err);
        }
    } 
    
    xhr.send();
}

function loadCustomers(e) {
    console.log(e);
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if(this.status === 200) {
            // console.log(this.responseText);
            const costumers = JSON.parse(this.responseText);
            
            let output = ""; 

            costumers.forEach(costumer => {
                output += `
                <ul>
                    <li>ID: ${costumer.id}</li>
                    <li>Name: ${costumer.name}</li>
                    <li>Company: ${costumer.company}</li>
                    <li>Phone: ${costumer.phone}</li>
                </ul>
            `;
            });

            document.querySelector('.customers').innerHTML = output;
            
        }else {
            console.log(err);
        }
    } 
    
    xhr.send();
}