module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "Définition des rôles"
        }
    });
};
