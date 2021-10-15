// init github
const github = new Github();
const ui = new UI();
// search input
const searchUser = document.getElementById("searchUser");
// fjasj
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // showalert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // show prfile
        console.log(data.profile);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
