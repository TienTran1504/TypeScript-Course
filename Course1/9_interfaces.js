var newUser = {
    dbId: 22, email: "123", userId: 231, githubToken: "github",
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, val) {
        return 10;
    }
};
var admin = {
    dbId: 22, email: "123", userId: 231, githubToken: "github", role: "admin",
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, val) {
        return 10;
    }
};
