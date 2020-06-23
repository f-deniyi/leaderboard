let otherUserBoard = document.querySelector(".other-user");
let topUserBoard = document.querySelector(".top-user");
let totalUser = document.querySelector("#total-user");


let sortedData;
function comparePoint(a, b) {
  const pointA = a.points;
  const pointB = b.points;
  let comparison = 0;
  if (pointA > pointB) {
    comparison = -1;
  } else if (pointA < pointB) {
    comparison = 1;
  }
  return comparison;
}

fetch("https://f-deniyi.github.io/leaderboard/leaderboard.json")
  .then((response) => response.json())
  .then((data) => {
    sortedData = data.sort(comparePoint);
    const generateBoard = () => {
      totalUser.textContent = sortedData.length;
      let topUserSection = [];
      const top3 = [];
      for (var i = 0; i < 3; i++) {
        top3.push(sortedData[i]);
        topUserSection.push(
          ` <div class='card card-header} first'>
        <div class="card-body">
          <div class='card-head'>
            <h1 class='user-name'> ${sortedData[i].username}</h1>
            <div class='medal'>
            <img src='./img/medal${i + 1}.png' width='120'>
            </div>
          </div>
          <div class='user-points'>
            <h2><span class='score'>${sortedData[i].points}</span> Points</h2>
          </div>
          <ul>
           <li><a href="https://www.facebook.com/sharer.php?..." target="blank" rel="noopener noreferrer">
          <img src="./img/facebook.png" alt="Share Page on Facebook" width='40'/></a>
           </li>
            <li><a href="https://twitter.com/intent/tweet?..." target="blank" rel="noopener noreferrer">
            <img src="./img/twitter.png" alt="Share Page on Twitter" width='40'/></a>
            </li>
            <li><a href="https://www.linkedin.com/shareArticle?..." target="blank" rel="noopener noreferrer">
            <img src="./img/linkedin.png" alt="Share Page on LinkedIn" width='40'/></a>
            </li>
          </ul>
          <p>Share your Points</p>
        </div>
      </div>`
        );
      }
      topUserBoard.innerHTML = topUserSection.join("");
      console.log(topUserBoard);

      console.log(top3);

      let otherUserSection = [];
      for (var i = 4; i < sortedData.length; i++) {
        otherUserSection.push(
          `
      <div class='card card-header'>
       <div class="card-body">
        <div class='user-name'>
          <h1>${sortedData[i].username}</h1>
        </div>
        <div class='user-points'>
          <h2><span class='score'>${sortedData[i].points}</span> Points</h2>
        </div>
        
          <ul>
           <li><a href="https://www.facebook.com/sharer.php?..." target="blank" rel="noopener noreferrer">
           <img src="./img/facebook.png" alt="Share Page on Facebook" width='35'/></a>
           </li>
            <li><a href="https://twitter.com/intent/tweet?..." target="blank" rel="noopener noreferrer">
            <img src="./img/twitter.png" alt="Share Page on Twitter" width='35'/></a>
            </li>
            <li><a href="https://www.linkedin.com/shareArticle?..." target="blank" rel="noopener noreferrer">
            <img src="./img/linkedin.png" alt="Share Page on LinkedIn" width='35'/></a>
            </li>
          </ul>
          <p>Share your Points</p>
          </div>
      </div>`
        );
      }
      otherUserBoard.innerHTML = otherUserSection.join("");
    };
    generateBoard();
  }
  );

function filterUser(x) {
  console.log(sortedData);
  console.log(x.value);
  let filteredUser = sortedData.filter((el) => {
    return el.points === x.value * 1;
  });
  console.log(filteredUser);
  filteredUserSection = [];
  for (i = 0; i < filteredUser.length; i++) {
    filteredUserSection.push(
      `
      <div class='card card-header'>
       <div class="card-body">
        <div class='user-name'>
          <h1>${filteredUser[i].username}</h1>
        </div>
        <div class='user-points'>
          <h2><span class='score'>${filteredUser[i].points}</span> Points</h2>
        </div>
        
          <ul>
           <li><a href="https://www.facebook.com/sharer.php?..." target="blank" rel="noopener noreferrer">
           <img src="./img/facebook.png" alt="Share Page on Facebook" width='35'/></a>
           </li>
            <li><a href="https://twitter.com/intent/tweet?..." target="blank" rel="noopener noreferrer">
            <img src="./img/twitter.png" alt="Share Page on Twitter" width='35'/></a>
            </li>
            <li><a href="https://www.linkedin.com/shareArticle?..." target="blank" rel="noopener noreferrer">
            <img src="./img/linkedin.png" alt="Share Page on LinkedIn" width='35'/></a>
            </li>
          </ul>
          <p>Share your Points</p>
          </div>
      </div>
    `
    );
  }
  if(filteredUserSection.length==0){
    otherUserBoard.innerHTML='<h1 style="text-align:center">No User Found</h1>'
  }else{
    otherUserBoard.innerHTML = filteredUserSection.join("");
  }
  
}
// for(var i=0; i<myData.)
