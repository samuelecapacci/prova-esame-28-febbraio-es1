async function fetchAsync() {
  var response = await fetch('https://reqres.in/api/users?page=3');
  var res = await response.json();
  return res;
}
fetchAsync()
  .then(res => {
    for (var i of res.data) {
      var div = document.createElement("div")

      var divFname = document.createTextNode("Nome: " + i.first_name)
      div.appendChild(divFname)
      document.getElementById("fetchFalse").appendChild(div)

      var divSname = document.createTextNode(" Cognome: " + i.last_name)
      div.appendChild(divSname)

      var elem = document.createElement("img")
      elem.setAttribute("src", i.avatar)
      div.appendChild(elem)
    }
  });





