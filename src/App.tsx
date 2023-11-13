import { AddNoteSidebar, Header, NoteList } from 'components';
import { Providers } from 'providers';

function App() {
  return (
    <Providers>
      <div className="p-6 pt-0">
        <Header />
        <NoteList />
        <AddNoteSidebar />
      </div>
    </Providers>
  );
}

export default App;
