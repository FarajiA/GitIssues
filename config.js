(function (config) {
        
    config.urls = {
        github: 'https://api.github.com/'
    };

    config.OAuth = "81bab79250f1147181bc6cee412cb0275f3d9541";
    config.headers = {
            'Accept': '*/*',
            'User-Agent': 'NodeApp',
            'Content-Type': 'application/json',
            'Authorization': 'token ' + config.OAuth

    };
 
})(module.exports);