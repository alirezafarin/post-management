import { Header, NoteList, TabList } from 'components';

function App() {
  return (
    <div className="p-6 pt-0">
      <Header />
      {/* <NoNoteBody /> */}
      <TabList />
      <NoteList />
    </div>
  );
}

export default App;
