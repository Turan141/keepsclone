import { makeObservable, makeAutoObservable, observable, computed } from 'mobx'

// export const LineItem = (item) => <li key={uuid()}>{item}</li>;
// const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

class KeepsStore {
  keeps = [
    {
      uuid: 1,
      bgColor: 'gray',
      description: 'Посадить дерево',
    },
    {
      uuid: 2,
      bgColor: 'red',
      description: 'Вырастить сына',
    },
    {
      uuid: 3,
      bgColor: 'orange',
      description: 'Быть всегда хорошим человеком',
    },
    {
      uuid: 4,
      bgColor: 'green',
      description: 'Развиваться, не останавливаться',
    },
    {
      uuid: 5,
      bgColor: 'green',
      description:
        'Развиваться, не останавливаться,Развиваться, не останавливаться,Развиваться,Развиваться, не останавливаться,Развиваться, не останавливаться,Развиваться, не останавливаться,Развиваться, не останавливаться',
    },
  ]
  filter = ''

  // keeps = "dd"

  constructor() {
    makeAutoObservable(this)
  }

  addKeep(note) {
    this.keeps.unshift(note)
  }
  removeKeep(uuid) {
    this.keeps = this.keeps.filter((item) => item.uuid !== uuid)
  }
  setFilter(filter) {
    this.filter = filter
  }
  get filteredKeeps() {
    return this.keeps.filter((note) => {
      // return note.description.toLowerCase().includes(this.filter.toLowerCase())
      return note.description.toLowerCase().indexOf(this.filter.toLowerCase()) >
        -1
        ? true
        : false
    })
  }
}

const KeepStore = new KeepsStore()

export default KeepStore
