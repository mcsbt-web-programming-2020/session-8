# session 8

In this session we'll learn how to execute HTTP requests from JS.

## Exercise 1

Using the following two apis we'll build a webpage that displays info
about a random movie!

- https://rand.fun/movies/title
- http://www.omdbapi.com

## Exercise 2

Tweeter, once again...

In this exercise we'll tie backend and frontend together.

### Exercise 2.1

Create a function to add tweets to the `div#timeline`. Keep in
mind that tweets should look as follows:

```html
<div class="tweet">
   <img src="img/pepe.jpg" alt="" class="profile-img">
   <div class="username">@pepe</div>
   <div class="txt">this is the text</div>
</div>
```

### Exercise 2.2

Create a function for getting all tweets for the timeline of the user.

This function should call to the `/timeline/<user>` endpoint with the
GET method in the server and render the tweet using the addTweetToTimeline
function



### Exercise 2.3

Create a function for posting a tweet.  This function should call to the
/tweet endpoint with the POST method

Make sure that you add the following header:
`"Content-Type": "application/json"`

### Exercise 2.4

Create a function to make one user follow another.  This function should call
the `/user/<follower>/follow/<followee>` with the POST method
