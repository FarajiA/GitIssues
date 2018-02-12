(function (Issue) {

    Issue.createIssue = function (title, state, username, avatar, summary) {
        this.title = title;
        this.state = state;
        this.username = username;
        this.avatar = avatar;
        this.summary = summary;
    };

})(module.exports)