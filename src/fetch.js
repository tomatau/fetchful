import EventEmitter from 'eventemitter3'

const ee = new EventEmitter()

function fetch(url, options) {
  ee.emit('fetch', { url, options })
  return window.fetch(url, options)
}

fetch.subscribe = (cb) => {
  ee.on('fetch', cb)
}

export default fetch
