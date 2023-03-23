module.exports = class UserDto{
    nickname;
    _id;
    isAdmin;

    constructor(model) {
        this.nickname = model.nickname
        this._id = model._id
        this.isAdmin = model.isAdmin
    }
}