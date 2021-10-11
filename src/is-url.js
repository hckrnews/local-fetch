const reRemote = /^\w[\w.+-]+:\/\//

const isRemote = target => reRemote.test(target)

export default isRemote
