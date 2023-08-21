import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { AccountTabsPropsType } from './types'

const AccountTabs: React.FC<AccountTabsPropsType> = ({
  select,
  tabs,
  children,
  ...rest
}) => {
  return (
    <Tabs {...rest}>
      <div className="react-tabs__header">
        {select}
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index} disabled={tab.disabled}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
      </div>
      {children.map((child, index) => (
        <TabPanel key={index}>{child}</TabPanel>
      ))}
    </Tabs>
  )
}

export default AccountTabs
