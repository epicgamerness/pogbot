const reqEvent = (event) => require(`../events/${event}`);

module.exports = client => {
    client.on("ready", function() {
        reqEvent("ready")(client)
    });
    client.on("message", function() {
        reqEvent("message")(client)
    });
    client.on("guildCreate", function() {
        reqEvent("guildCreate")(client)
    });
    client.on("guildDelete", function() {
        reqEvent("guildDelete")(client)
    });
}