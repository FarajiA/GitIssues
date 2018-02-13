(function (config) {
        
    config.urls = {
        github: 'https://api.github.com/'
    };
    
    config.headers = {
            'Accept': '*/*',
            'User-Agent': 'NodeApp',
            'Content-Type': 'application/json'
    };
 
})(module.exports);