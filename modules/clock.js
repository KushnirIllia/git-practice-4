export default class Clock {
  constructor(clockQuerySelector) {
    #clockQuerySelector
    this.#clockQuerySelector = document.querySelector(clockQuerySelector)
  }
  run() {
    const clock = (container) => {
      function updateTime() {
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        return { hours, minutes, seconds }
      }
      function validateTime(functUpdateTime) {
        const { hours,  minutes, seconds } = functUpdateTime
        const validateOne = (str) => {
          if (str < 10) {
            str = `0${str}` 
          }
          return str
        }
        return [validateOne(hours), validateOne(minutes), validateOne(seconds)]
      }
      validateTime(updateTime())
      const [ hours,  minutes, seconds ] = validateTime(updateTime())
      container.textContent = `${hours}:${minutes}:${seconds}`
      setInterval(() => {
        const [ hours,  minutes, seconds ] = validateTime(updateTime())
        container.textContent = `${hours}:${minutes}:${seconds}`
      }, 1000)
    }
    clock(this.#clockQuerySelector)
  }
}