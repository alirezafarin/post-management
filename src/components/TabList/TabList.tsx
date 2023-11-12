import BaseTab from 'components/Base/BaseTab/BaseTab';
import { tabs } from 'constants/tabs';

export const TabList = () => {
  return (
    <div className="flex items-center justify-start gap-3 py-4 overflow-x-auto">
      {tabs.map((tab) => (
        <BaseTab key={tab.id} {...tab} />
      ))}
    </div>
  );
};
