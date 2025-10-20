Hooks.on('diceSoNiceReady', (dice3d) => {
    const diceobj = dice3d.DiceFactory.get('d10')
    diceobj.mass = 500
    diceobj.shape = 'd20'
    diceobj.inertia = 9
    diceobj.labels = ['1','2','3','4','5','6','7','8','9','10','10','9','8','7','6','5','4','3','2','1']
    diceobj.scale = 1
})
