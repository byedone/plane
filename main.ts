controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bogey = sprites.createProjectileFromSprite(assets.image`galgaDart1`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(assets.image`BlueBaumer`, SpriteKind.Player)
spacePlane.setPosition(0, 60)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(assets.image`galgaEnemy1`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 160))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
