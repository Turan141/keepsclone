import TextField from '@mui/material/TextField'
import { observer } from 'mobx-react-lite'
import KeepStore from '../../store/keeps'
import './SearchBox.scss'

export const SearchBox = observer(() => {
  return (
    <div className="search_main">
      <TextField
        id="standard-basic"
        label={`Поиск по заметкам`}
        variant="standard"
        value={KeepStore.filter}
        onChange={(e) => KeepStore.setFilter(e.target.value)}
      />
    </div>
  )
})
