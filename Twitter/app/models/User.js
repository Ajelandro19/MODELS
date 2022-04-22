class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id=id
        this.username=username
        this.name=name
        this.dateCreated=new Date ()
        this.bio=bio
        this.lastUpdated=new Date()
    }
}

module.exports = User