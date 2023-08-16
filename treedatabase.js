class RealtimeDatabase {
  constructor(name) {
    this.name = name || "default"
    this.data = {}
  }
  init(databaseName) {
    this.name = databaseName
  }

  write(path, data) {
    console.log(path.split("/"))
    // this.data[key] = data
  }

  read() {
    return this.data
  }
}

const rtdb = new RealtimeDatabase("test")

let data = {}

const treePath = "messenger/client_1/from"

function set(path, value) {
  try {
    let pathArr = path.split("/")
    console.log(">>> / file: treedatabase.js / line 29 / pathArr", pathArr)
    let totalLevel = pathArr.length
    // const lastChild = {pathArr[-1]: value}
    let lastChild = {}
    lastChild[pathArr[totalLevel - 1]] = value
    data = {...lastChild}
    if (totalLevel > 1) {
      for (let index = totalLevel - 2; index >= 0; index--) {
        let tmp = {}
        tmp[pathArr[index]] = data
        data = {...tmp}
      }
    }
  } catch (error) {
    console.log(error)
  }
}

set("messenger/client_1/from", "hai")
set("messenger/client_1/to", "hoai")

console.log(data)
