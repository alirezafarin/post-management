import BaseTab from 'components/Base/BaseTab/BaseTab';
import { tabs } from 'constants/tabs';
import { useNotesContext } from 'hooks';

export const TabList = () => {
  const { activeTab, setActiveTab, notes } = useNotesContext();

  const getTabCount = (name: string) => {
    if (name === 'All') return notes.length;
    return notes.filter((note) => note.priority === name).length;
  };

  return (
    <div className="flex items-center justify-start gap-3 py-4 overflow-x-auto">
      {tabs.map(({ id, name }) => (
        <BaseTab
          key={id}
          active={activeTab === name.toLowerCase()}
          onClick={() => setActiveTab(name.toLowerCase() as any)}
          id={id}
          name={name}
          count={getTabCount(name as any)}
        />
      ))}
    </div>
  );
};
