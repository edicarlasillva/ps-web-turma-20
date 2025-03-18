import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRepositories } from "../../services/api"

interface Repository {
  id: number
  name: string
  html_url: string
}

interface RepositoryState {
  repositories: Repository[]
  loading: boolean
}

const initialState: RepositoryState = {
  repositories: [],
  loading: false
}

export const fetchRepositories = createAsyncThunk('repositories/fetchRepositories', async (username: string, config) => {
  const repositories = await getRepositories(username)
  console.log('Estado atual:', config.getState())
  
  return repositories
})

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.loading = false
      state.repositories = action.payload
    })
    builder.addCase(fetchRepositories.rejected, (state) => {
      state.loading = false
    })
  }
})

export default repositoriesSlice.reducer