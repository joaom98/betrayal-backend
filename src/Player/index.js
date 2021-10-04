class Player{
    constructor( id, name, creature = null ) {
        this.id = id;
        this.name = name;

        this.creature = creature;

    }
}

module.exports = {
    Player
};