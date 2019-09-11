const myInfo = {
  name: "Richard Wrex",
  type: "T-Rex",
  imageUrl: "https://d1w8cc2yygc27j.cloudfront.net/-1033523364729088921/7889254060776196142.jpg",
  bio: "bla bla bla bla bla"
}

const printToDom = (divId, stringToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
}

const cardBuilder = (profileObj) => {
  const domString = `
  <div class="card mb-3">
    <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${profileObj.imageUrl}" class="card-img" alt="Picture of ${profileObj.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${profileObj.name}</h5>
        <p class="card-text">${profileObj.bio}</p>
        <p class="card-text"><small>${profileObj.type}</small></p>
      </div>
    </div>
  </div>
</div>
  `
  printToDom('profile-zone', domString);
}

cardBuilder(myInfo);