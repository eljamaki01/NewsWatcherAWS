var config = {}

config.JWT_SECRET = "<yoursecretkey>";
config.FAROO_KEY = "<yourfarookey>";
config.MONGODB_CONNECT_URL = "mongodb://<username>:<password>@ds015710.mlab.com:15710/newswatcherdb";
config.MAX_SHARED_STORIES = 100;
config.MAX_COMMENTS = 30;
config.MAX_Q_RETRIES = 3;
config.MAX_FILTERS = 5;
config.MAX_FILTER_STORIES = 10;

module.exports = config;