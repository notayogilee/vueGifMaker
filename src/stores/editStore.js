import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEditStore = defineStore('textEdit', () => {
  const addText = ref(false)
  const isEditing = ref(null)
  const beforeEditText = ref({})

  const text = ref({
    top: {
      text: null,
      fontSize: '0',
      fontWeight: '0',
      color: 'text-black'
    },
    middle: {
      text: null,
      fontSize: '0',
      fontWeight: '0',
      color: 'text-black'
    },
    bottom: {
      text: null,
      fontSize: '0',
      fontWeight: '0',
      color: 'text-black'
    }
  })

  function updateIsEditing(data) {
    isEditing.value = data
    beforeEditText.value = { ...text.value[isEditing.value] }
  }

  function cancelEditText() {
    text.value[isEditing.value] = { ...beforeEditText.value }
    isEditing.value = null
    beforeEditText.value = {}
  }

  function updateColor(newColor) {
    text.value[isEditing.value].color = newColor
  }

  return {
    text,
    addText,
    isEditing,
    showOverlay,
    updateIsEditing,
    cancelEditText,
    updateColor
  }
})
