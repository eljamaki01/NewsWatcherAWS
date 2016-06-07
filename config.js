var config = {}

config.JWT_SECRET = "<yoursecretkey>";
config.NEWYORKTIMES_API_KEY = "<yoursecretkey>"
config.NEWYORKTIMES_CATEGORIES = ["world", "national", "business", "technology"];
config.MONGODB_CONNECT_URL = "mongodb://<username>:<password>@ds015710.mlab.com:15710/newswatcherdb";
config.GLOBAL_STORIES_ID = "MASTER_STORIES_DO_NOT_DELETE";
config.MAX_SHARED_STORIES = 30;
config.MAX_COMMENTS = 30;
config.MAX_FILTERS = 5;
config.MAX_FILTER_STORIES = 15;

module.exports = config;