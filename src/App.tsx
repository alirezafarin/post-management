import { AddNoteSidebar, Header, NoNoteBody } from 'components';
import { Providers } from 'providers';

function App() {
  return (
    <Providers>
      <div className="p-6 pt-0">
        <Header />
        <NoNoteBody />
        {/* <TabList />
      <NoteList /> */}
        <AddNoteSidebar />
      </div>
    </Providers>
  );
}

export default App;
