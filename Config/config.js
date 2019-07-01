const config = {

  'mongodb': {
    'database': 'wp2018_groupD',
    'host': 'luffy.ee.ncku.edu.tw',
    'password': 'citychaser2018',
    'user': 'wp2018_groupD'
  },

  'secret': '-=~!|Kyronus/\forever yo|-=~!',

  'google': {
    'clientID': '756112742682-h73nrgl0lo5e22uf8t3hrhajhd0hav9i.apps.googleusercontent.com',
    'clientSecret': 'KEFFfkx5AJHYHslH3YcCPy8g',
    'callbackURL': '/user/Auth',
  },
  
  'facebook' :{ 
    'ID' : '2218872001499698',
    'secret' :'f259a5f277d9dc71928d7c2a897772f2',
    'callbackURL': '/user/facebook/cb',
  },

  'AzureInsight':{
    'instrumentation_key' : '37db324a-652f-489f-82b8-db8ec90d2acd',
  }
}
module.exports = config;