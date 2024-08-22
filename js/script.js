let contacts = [];

const listItems = document.querySelectorAll(".list-group-item");

// console.log("test");

listItems.forEach((item) => {
  //   console.log("test2");
  //   console.log(item);
  //   console.log(item.textContent.trim());
  // console.log(item.textContent.trim().split(" / "));
  let contactItem = item.textContent.trim().split(" / ");
  contacts.push({
    name: contactItem[0],
    phone: contactItem[1],
    email: contactItem[2],
  });
});

console.log(contacts);

// console.log(contactObjectArray);

function addContact() {
  //   console.log("addContact");
  let userChoice;
  do {
    userChoice = prompt("Choose an option: first, last, new, or quit");
    if (userChoice === "new") {
      let newName = prompt("Enter name:");
      let newPhone = prompt("Enter phone number:");
      let newEmail = prompt("Enter email address:");

      //   Validate input
      if (!newName || isNaN(newPhone) || !newEmail.includes("@")) {
        alert("Invalid input. Please try again.");
        continue;
      }

      let newListItem = document.createElement("li");
      newListItem.className = "list-group-item";
      newListItem.textContent = `${newName} / ${newPhone} / ${newEmail}`;

      let listGroup = document.querySelector(".list-group");
      listGroup.appendChild(newListItem);
      //   console.log("test4");
      //   console.log(newListItem);

      //   // Add new contact
      //   contacts.push({
      //     name: newName,
      //     phone: newPhone,
      //     email: newEmail,
      //   });
      //   console.log("New contact added: " + newName);
    } else if (userChoice === "quit") {
      break;
    }
  } while (true);
}
