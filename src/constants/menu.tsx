
  import { v4 as uuid } from 'uuid'
import { HomeDuoToneWhite } from '../components/icons/home-duo-tone-white'
import { AutomationDuoToneWhite } from '../components/icons/automation-duotone-white'
import { RocketDuoToneWhite } from '../components/icons/rocket-duotone-white'
import { SettingsDuoToneWhite } from '../components/icons/settings-duotone-white'
  
  export type FieldProps = {
    label: string
    id: string
  }
  
  type SideBarProps = {
    icon: React.ReactNode
  } & FieldProps
  
  export const SIDEBAR_MENU: SideBarProps[] = [
    {
      id: uuid(),
      label: 'home',
      icon: <HomeDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'automations',
      icon: <AutomationDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'integrations',
      icon: <RocketDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'settings',
      icon: <SettingsDuoToneWhite />,
    },
  ]