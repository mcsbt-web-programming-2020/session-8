 /**
  * Exercise 1
  * 
  * Create a function to add tweets to the div#timeline. Keep in 
  * mind that tweets should look as follows:
  * 
  *          <div class="tweet">
  *              <img src="img/pepe.jpg" alt="" class="profile-img">
  *              <div class="username">@pepe</div>
  *              <div class="txt">this is the text</div>
  *          </div>
  */
const addTweetToTimeline = (user, tweet) => {
    let tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet");
    let profileImg = document.createElement("img");
    profileImg.classList.add("profile-img");
    profileImg.setAttribute("src", `img/${user}.jpg`)
    tweetDiv.appendChild(profileImg);
    let usernameDiv = document.createElement("div");
    usernameDiv.innerHTML = `@${user}`;
    usernameDiv.classList.add("username");
    tweetDiv.appendChild(usernameDiv);
    let textDiv = document.createElement("div");
    textDiv.classList.add("txt");
    textDiv.innerHTML = tweet;
    tweetDiv.appendChild(textDiv);
    document.querySelector(".timeline").appendChild(tweetDiv);
};


/**
 * Exercise 2
 * 
 * Create a function for getting all tweets for the timeline of the user.
 * 
 * This function should call to the /timeline/<user> endpoint with the 
 * GET method in the server and render the tweet using the addTweetToTimeline
 * function
 */
const getTimeline = (user) => {
  fetch(`http://localhost:5000/timeline/${user}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.forEach(element => {
        addTweetToTimeline(element.user, element.tweet);
      });
    })
};


/**
 * Exercise 3
 * 
 * Create a function for posting a tweet.  This function should call to the
 * /tweet endpoint with the POST method
 * 
 * Make sure that you add the following header:
 * "Content-Type": "application/json"
 */
const createTweet = (usr, twt) => {
  fetch(
    "http://localhost:5000/tweet", {
    method: "POST",
    body: JSON.stringify({user: usr, tweet: twt}),
    headers: {"Content-Type": "application/json"}
    })
};

/**
 * Exercise 4
 * 
 * Create a function to make one user follow another.  This function should call
 * the /user/<follower>/follow/<followee> with the POST method
 */
const follow = (follower, followee) =>  {
  fetch(`http://localhost:5000/user/${follower}/follow/${followee}`, {method: "POST"})
};
