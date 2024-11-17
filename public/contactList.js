
let contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

function displayContacts(list) {
    console.log("Contact List:");
    list.forEach(contact => {
        console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    });
}

displayContacts(contactList);

let newContact = { name: "Maisie Haley", phone: "0913 531 3030", email: "risus.Quisque@urna.ca" };
contactList.push(newContact);

console.log("\nUpdated Contact List:");
displayContacts(contactList);

console.log("\nFirst Contact:");
console.log(`${contactList[0].name} / ${contactList[0].phone} / ${contactList[0].email}`);


console.log("\nLast Contact:");
console.log(`${contactList[contactList.length - 1].name} / ${contactList[contactList.length - 1].phone} / ${contactList[contactList.length - 1].email}`);
