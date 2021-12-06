import TwitterApi from 'twitter-api-v2';
require('dotenv').config()

const twitterClient = new TwitterApi(process.env.bearer_token);
const roClient = twitterClient.readOnly;

export async function connect(id){
  
  const user = await roClient.v2.user(id);
  const tweetsOfUser = await roClient.v2.userTimeline(id, { exclude: 'replies' });
  
  console.log(`Tweets of: ${user.data.name}`);
  console.log(tweetsOfUser.data.data[0])

  return tweetsOfUser;
}