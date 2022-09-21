import { useState } from 'react'
import KeepStore from '../../store/keeps'
import { observer } from 'mobx-react-lite'
import uuid from 'react-uuid'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  TextField,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { BsTrash } from 'react-icons/bs'
import './Workspace.scss'

export const Workspace = observer(() => {
  const [newTaskText, setNewTaskText] = useState('')
  const filteredNotes = KeepStore.filteredKeeps
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16)

  const addNote = async () => {
    KeepStore.addKeep({
      uuid: uuid(),
      bgColor: randomColor,
      description: newTaskText,
    })
    return setNewTaskText('')
  }

  const handleKeyDown = async (e: any) => {
    if (e.key === 'Enter') {
      await addNote()
      e.target.blur()
    }
  }

  const removeNote = (uuid: number) => {
    KeepStore.removeKeep(uuid)
  }
  return (
    <>
      <Container>
        <TextField
          id="filled-textarea"
          label="Создать заметку"
          placeholder="Введите название заметки"
          multiline
          fullWidth
          value={newTaskText}
          onChange={(e) => {
            setNewTaskText(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            newTaskText && addNote()
          }}
          sx={{
            marginTop: 3,
          }}
        />
        <Grid container spacing={2}>
          {KeepStore?.keeps &&
            filteredNotes.map((note: any) => {
              return (
                <Grid item xs={4} mt={4} key={note.uuid}>
                  <Card
                    sx={{
                      minWidth: 75,
                      maxWidth: 350,
                      margin: 3,
                      backgroundColor: note.bgColor,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {note.description ? note.description : 'Пустая заметка'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => removeNote(note.uuid)}
                        size="small"
                      >
                        {<BsTrash />}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </>
  )
})
