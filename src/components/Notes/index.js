// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Container,
  NotesContainerForm,
  Heading,
  NotesInput,
  NotesTextInput,
  AddButton,
  EmptyContainer,
  EmptyHeading,
  EmptyPara,
  EmptyImage,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteCountList, setNoteCountList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNote(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      note,
    }

    setTitle('')
    setNote('')
    setNoteCountList(prevNotesList => [...prevNotesList, newNote])
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <NotesContainerForm onSubmit={onAddNotes}>
        <NotesInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <NotesTextInput
          row="4"
          placeholder="Take a note..."
          value={note}
          onChange={onChangeNotes}
        />
        <AddButton type="submit">Add</AddButton>
      </NotesContainerForm>
      <div>
        {noteCountList.length === 0 ? (
          <EmptyContainer>
            <EmptyImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyHeading>No Notes Yet</EmptyHeading>
            <EmptyPara>Notes you add will appear here</EmptyPara>
          </EmptyContainer>
        ) : (
          <NotesList>
            {noteCountList.map(eachNote => (
              <NoteItem key={eachNote.id} noteDetails={eachNote} />
            ))}
          </NotesList>
        )}
      </div>
    </Container>
  )
}

export default Notes
