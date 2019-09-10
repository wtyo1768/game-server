const config = {

  'secret': '-=~!|Kyronus/\forever yo|-=~!',

  'google': {
    'clientID': '756112742682-h73nrgl0lo5e22uf8t3hrhajhd0hav9i.apps.googleusercontent.com',
    'clientSecret': 'KEFFfkx5AJHYHslH3YcCPy8g',
    'callbackURL': (process.env.NODE_ENV.trim() == "development") ?
     'http://localhost:3000/api/user/Auth' : 'https://test.citychaserstudio.com/api/user/Auth',
  },
  
  'facebook' : { 
    'ID' : '2218872001499698',
    'secret' :'f259a5f277d9dc71928d7c2a897772f2',
    'callbackURL': (process.env.NODE_ENV.trim() == "development") ?
    'http://localhost:3000/api/user/facebook/cb' :'https://test.citychaserstudio.com/api/user/facebook/cb',
  },
}

module.exports = config;
