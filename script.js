var to = "";

for (let i = 0; i < data.email.to.length; i++) {
  const email = data.email.to[i];
  to += email;
  if (i !== data.email.to.length - 1) to += ",";
}

var cc = "";

if (data.email.cc.length === 0) {
  cc = null;
} else {
  for (let i = 0; i < data.email.cc.length; i++) {
    const email = data.email.cc[i];
    cc += email;
    if (i !== data.email.cc.length - 1) cc += ",";
  }
}

var bcc = "";

if (data.email.bcc.length === 0) {
  bcc = null;
} else {
  for (let i = 0; i < data.email.bcc.length; i++) {
    const email = data.email.bcc[i];
    bcc += email;
    if (i !== data.email.bcc.length - 1) bcc += ",";
  }
}

let title = document.getElementById("title");
title.innerText = data.title;

let image = document.getElementById("image");
image.src = data.image;

let desc = document.getElementById("desc");
desc.innerHTML = data.description;

var toList = document.createElement("UL");
data.email.to.forEach((email) => {
  var li = document.createElement("LI");
  var text = document.createTextNode(email);
  li.appendChild(text);
  toList.appendChild(li);
});
document.getElementById("to").appendChild(toList);

// var ccList = document.createElement("UL");
// data.email.cc.forEach((email) => {
//   var li = document.createElement("LI");
//   var text = document.createTextNode(email);
//   li.appendChild(text);
//   ccList.appendChild(li);
// });
// document.getElementById("cc").appendChild(ccList);

let subject = document.getElementById("subject");
subject.innerText = data.email.subject;

let body = document.getElementById("body");
body.innerText = data.email.body;

let send = document.getElementById("send");
send.value = data.email.buttonText;

let formTitle = document.getElementById("formTitle");
formTitle.innerText = data.formDescription;

function onSubmit() {
  console.log("submit");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let pin = document.getElementById("pin");
  let phone = document.getElementById("phone");
  window.open(
    `mailto:${to}${cc ? "?cc=" + cc : ""}${
      bcc ? (cc ? "&bcc=" + bcc : "?bcc=" + bcc) : ""
    }&subject=${encodeURI(data.email.subject)}&body=${encodeURI(
      data.email.body
    )}%0D%0A${encodeURI(name.value)}%0D%0A${email.value}%0D%0A${
      phone.value
    }%0D%0A${pin.value}`
  );
}
