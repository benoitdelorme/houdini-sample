CSS.paintWorklet.addModule('https://raw.githubusercontent.com/benoitdelorme/houdini-sample/master/paint-worklet/js/generative-bubble.js')

CSS.registerProperty({
    name: '--color-1',
    syntax: '<color>',
    inherits: false,
    initialValue: '#222831',
})

CSS.registerProperty({
    name: '--color-2',
    syntax: '<color>',
    inherits: false,
    initialValue: '#30475e',
})

CSS.registerProperty({
    name: '--color-3',
    syntax: '<color>',
    inherits: false,
    initialValue: '#f2a365',
})

CSS.registerProperty({
    name: '--color-4',
    syntax: '<color>',
    inherits: false,
    initialValue: '#ececec',    
})