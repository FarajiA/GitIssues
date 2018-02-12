(function (Issue) {

    Issue.createIssue = function (id, title, user, user_avatar, body) {
        this.id = id;
        this.title = title;
        this.user = user;
        this.user_avatar = user_avatar;
        this.body = body;
    };

})(module.exports)