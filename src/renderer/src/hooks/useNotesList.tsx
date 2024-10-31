import { notesAtom, selectedNodeIndexAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useAtomValue(notesAtom)

  const [selectedNodeIndex, setSelectedNodeIndex] = useAtom(selectedNodeIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNodeIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNodeIndex,
    handleNoteSelect
  }
}
