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
};

/**
 * Exercise 4
 *
 * Create a function to make one user follow another.  This function should call
 * the /user/<follower>/follow/<followee> with the POST method
 */
const follow = (follower, followee) =>  {
};
