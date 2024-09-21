player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
