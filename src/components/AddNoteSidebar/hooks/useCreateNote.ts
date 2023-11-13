import { useNotesContext, useSidebarContext } from 'hooks';
import { useState } from 'react';
import { v4 } from 'uuid';

const useCreateNote = () => {
  const { addNote } = useNotesContext();
  const [values, setValues] = useState({ title: '', priority: '', description: '' });
  const { closeSidebar } = useSidebarContext();

  const onChange = ({ name, newValue }: { name: string; newValue: string }) =>
    setValues((prevValues) => ({ ...prevValues, [name]: newValue }));

  const onCreate = () => {
    addNote({
      creator: 'Farhad Shariatmadari',
      date: new Date(),
      description: values.description,
      priority: values.priority as any,
      title: values.title,
      id: v4(),
    });
    setValues({ description: '', priority: '', title: '' });
    closeSidebar();
  };

  return { values, onChange, onCreate, setValues };
};

export default useCreateNote;
