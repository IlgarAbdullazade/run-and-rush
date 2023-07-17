import { ReactNode } from 'react'
import { Tab, Tabs, TabList, TabPanel, TabsProps } from 'react-tabs'

type AccountTabsPropsType = TabsProps & {
  select: ReactNode
  tabs: string[]
  children: ReactNode[]
}

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
            <Tab key={index}>{tab}</Tab>
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
