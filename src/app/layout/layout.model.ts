import { TranslateableElement } from '@stratio/egeo';

export interface EgeoMenu {
   label: string;
   link: string;
   submenu?: Array<EgeoMenu>;
   isMainMenu?: boolean;
}

export interface EgeoMenuSchema {
   label: TranslateableElement;
   link: string;
   submenu?: Array<EgeoMenuSchema>;
   isMainMenu?: boolean;
}

export interface VersionComparationOptions {
   lexicographical: boolean;
   zeroExtend: boolean;
}


export const MENU: Array<EgeoMenuSchema> = [
   {
      label: { key: 'MENU.OVERVIEW.LABEL', translate: true },
      link: '/',
      isMainMenu: true,
      submenu: [
         {
            label: { key: 'MENU.OVERVIEW.ABOUT', translate: true },
            link: '/main'
         },
         {
            label: { key: 'MENU.OVERVIEW.GETTINGSTARTED', translate: true },
            link: '/gettingstarted'
         },
         {
            label: { key: 'MENU.OVERVIEW.CHANGELOG', translate: true },
            link: '/changelog'
         }
      ]
   },
   {
      label: { key: 'MENU.THEMES.LABEL', translate: true },
      link: '/themes',
      isMainMenu: true,
      submenu: [
         {
            label: { key: 'MENU.THEMES.STRATIO.LABEL', translate: true },
            link: '/themes/stratio',
            submenu: [
               {
                  label: { key: 'MENU.THEMES.STRATIO.COLORS', translate: true },
                  link: '/themes/stratio/colors'
               },
               {
                  label: { key: 'MENU.THEMES.STRATIO.ICONS', translate: true },
                  link: '/themes/stratio/icons'
               },
               {
                  label: { key: 'MENU.THEMES.STRATIO.TYPOGRAPHY', translate: true },
                  link: '/themes/stratio/typography'
               },
               {
                  label: { key: 'MENU.THEMES.STRATIO.GRID', translate: true },
                  link: '/themes/stratio/grid'
               }
            ]
         }
      ]
   },
   {
      label: { key: 'MENU.COMPONENTS.LABEL', translate: true },
      link: '/components',
      isMainMenu: true,
      submenu: [
         {
            label: { key: 'MENU.COMPONENTS.BUTTONS.LABEL', translate: true },
            link: '/components/buttons',
            submenu: [
               {
                  label: { key: 'MENU.COMPONENTS.BUTTONS.BUTTON', translate: true },
                  link: '/components/buttons/button'
               },
               {
                  label: { key: 'MENU.COMPONENTS.BUTTONS.TOGGLE_BUTTON', translate: true },
                  link: '/components/buttons/toggle'
               }
            ]
         },
         {
            label: { key: 'MENU.COMPONENTS.FEEDBACK.LABEL', translate: true },
            link: '/components/feedback',
            submenu: [
               {
                  label: { key: 'MENU.COMPONENTS.FEEDBACK.SPINNER', translate: true },
                  link: '/components/feedback/spinner'
               }
            ]
         },
         {
            label: { key: 'MENU.COMPONENTS.FORMS.LABEL', translate: true },
            link: '/components/forms',
            submenu: [
               {
                  label: { key: 'MENU.COMPONENTS.FORMS.DYNAMIC_FORM', translate: true },
                  link: '/components/forms/dynamic-form'
               },
               {
                  label: { key: 'MENU.COMPONENTS.FORMS.CHECKBOX', translate: true },
                  link: '/components/forms/checkbox'
               },
               {
                  label: { key: 'MENU.COMPONENTS.FORMS.COMBOBOX', translate: true },
                  link: '/components/forms/combobox'
               },
               {
                  label: { key: 'MENU.COMPONENTS.FORMS.INPUT', translate: true },
                  link: '/components/forms/input'
               },
               {
                  label: { key: 'MENU.COMPONENTS.FORMS.RADIO', translate: true },
                  link: '/components/forms/radio'
               },
               {
                  label: { key: 'MENU.COMPONENTS.FORMS.SWITCH', translate: true },
                  link: '/components/forms/switch'
               },
               {
                  label: { key: 'MENU.COMPONENTS.FORMS.TEXTAREA', translate: true },
                  link: '/components/forms/textarea'
               }
            ]
         },
         {
            label: { key: 'MENU.COMPONENTS.HELP.LABEL', translate: true },
            link: '/components/help',
            submenu: [
               {
                  label: { key: 'MENU.COMPONENTS.HELP.HELP', translate: true },
                  link: '/components/help/help'
               }
            ]
         },
         {
            label: { key: 'MENU.COMPONENTS.INFO.LABEL', translate: true },
            link: '/components/info',
            submenu: [
               {
                  label: { key: 'MENU.COMPONENTS.INFO.BOX', translate: true },
                  link: '/components/info/box'
               },
               {
                  label: { key: 'MENU.COMPONENTS.INFO.CARD', translate: true },
                  link: '/components/info/card'
               }
            ]
         },
         {
            label: { key: 'MENU.COMPONENTS.MODAL', translate: true },
            link: '/components/modal'
         },
         {
            label: { key: 'MENU.COMPONENTS.NAVIGATION.LABEL', translate: true },
            link: '/components/navigation',
            submenu: [
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.BREADCRUMBS', translate: true },
                  link: '/components/navigation/breadcrumbs'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.DROPDOWN', translate: true },
                  link: '/components/navigation/dropdown'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.DROPDOWN_MENU', translate: true },
                  link: '/components/navigation/dropdown-menu'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.FOOTER', translate: true },
                  link: '/components/navigation/footer'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.HEADER', translate: true },
                  link: '/components/navigation/header'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.PAGE_TITLE', translate: true },
                  link: '/components/navigation/page-title'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.PAGINATION', translate: true },
                  link: '/components/navigation/pagination'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.RADIO_MENU', translate: true },
                  link: '/components/navigation/radio-menu'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.TABS_BOX', translate: true },
                  link: '/components/navigation/tab-box'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.TABS_HORIZONTAL', translate: true },
                  link: '/components/navigation/tabs-horizontal'
               },
               {
                  label: { key: 'MENU.COMPONENTS.NAVIGATION.TABS_VERTICAL', translate: true },
                  link: '/components/navigation/tabs-vertical'
               }
            ]
         },
         {
            label: { key: 'MENU.COMPONENTS.TABLE.LABEL', translate: true },
            link: '/components/table'
         },
         {
            label: { key: 'MENU.COMPONENTS.TOOLTIP', translate: true },
            link: '/components/tooltip'
         },
         {
            label: { key: 'MENU.COMPONENTS.TWO_LIST', translate: true },
            link: '/components/two-list'
         },
         {
            label: { key: 'MENU.COMPONENTS.SEARCH', translate: true },
            link: '/components/search'
         }
      ]
   },
   {
      label: { key: 'MENU.SERVICES.LABEL', translate: true },
      link: '/services',
      isMainMenu: true,
      submenu: [
         {
            label: { key: 'MENU.SERVICES.REGEXP', translate: true },
            link: '/services/regexp'
         }
      ]
   }
   // {
   //    label: { key: 'MENU.PIPES.LABEL', translate: true },
   //    link: '/pipes',
   //    isMainMenu: true
   // }

];
