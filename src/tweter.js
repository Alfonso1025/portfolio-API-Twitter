import TwitterApi from 'twitter-api-v2';

const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAJHcVAEAAAAAD9QS2NUzNIOG%2B22Kaxd6WPZK2ac%3DuFLggfsPvmtQ4bKuQ1KEkF3jFqYFrd3yRVSzz9mZKO6VEEAaOi');
const roClient = twitterClient.readOnly;

export async function connect(id){
  
  const user = await roClient.v2.user(id);
  const tweetsOfUser = await roClient.v2.userTimeline(id, { exclude: 'replies' });
  
  console.log(`Tweets of: ${user.data.name}`);
  console.log(tweetsOfUser.data.data[0])

  return tweetsOfUser;
}