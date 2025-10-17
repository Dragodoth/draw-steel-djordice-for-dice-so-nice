Hooks.on('diceSoNiceReady', (dice3d) => {
    const diceobj = dice3d.DiceFactory.get('d10')
    diceobj.mass = 500
    diceobj.shape = 'd20'
    diceobj.inertia = 9
    diceobj.labels = ['1','4','7','8','5','3','6','9','10','2','2','10','9','6','3','5','8','7','4','1']
    diceobj.values = [1,4,7,8,5,3,6,9,10,2,2,10,9,6,3,5,8,7,4,1]
    diceobj.scale = 1
})
