(function (config) {
        
    config.urls = {
        github: 'https://api.github.com/'
    };

    config.OAuth = "086bf22fba2886d8b337553fb9c9ba41eb02a159";
    config.headers = {
            'Accept': '*/*',
            'User-Agent': 'NodeApp',
            'Content-Type': 'application/json',
            'Authorization': 'token ' + config.OAuth

    };
 
})(module.exports);