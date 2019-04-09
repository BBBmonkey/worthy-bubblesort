<template>
  <div class="container">
    <form @submit="addToArr();">
      <input type="number" min="1" max="99" required v-model="valToAdd">
      <button>Add To Arr</button>
    </form>
    <button @click="bubbleSort();">Bubble Sort</button>
    <button @click="shuffle();">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
      <li
        v-for="(row, index) in arrToSort"
        :key="`row-${index}`"
        :style="{ width: `${row}%`}"
        class="sortable"
      >{{row}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'BubbleSort',
  data () {
    return {
      arrToSort: [7, 3, 5, 10, 9, 12, 20],
      valToAdd: 1
    }
  },

  methods: {
    async bubbleSort () {
      let swapped
      do {
        swapped = false
        for (var i = 0; i < this.arrToSort.length; i++) {
          if (this.arrToSort[i] > this.arrToSort[i + 1]) {
            await this.swap(i, i + 1)
            swapped = true
          }
        }
      } while (swapped)
    },

    swap (i, j) {
      let temp = this.arrToSort[i]
      this.$set(this.arrToSort, i, this.arrToSort[j])
      this.$set(this.arrToSort, j, temp)
      return new Promise(resolve => setTimeout(resolve, 500))
    },

    addToArr () {
      if (this.valToAdd >= 1 && this.valToAdd < 100) {
        this.arrToSort.push(this.valToAdd)
      } else {
        alert('Values must be between 1 to 100')
      }
    },

    shuffle () {
      this.arrToSort = this.arrToSort.sort(() => Math.random() - 0.5)
    }
  }
}
</script>

<style scoped>
.container > ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flip-list-move {
  transition: transform 0.5s;
}

.sortable {
  height: 35px;
  background: red;
  margin: 10px;
  color: whitesmoke;
  border-radius: 5%;
  list-style: none;
}
</style>
