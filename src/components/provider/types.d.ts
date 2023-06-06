import type { EdgeInsets } from 'react-native-safe-area-context'

export interface HoldMenuProviderProps {
  /**
   * Theme of hold menu. Effects to backdrop and context menu styles. Optional.
   * @type "light" | "dark"
   * @default "light"
   * @examples
   * theme="light"
   */
  theme?: 'dark' | 'light'
  iconComponent?: any
  children: React.ReactElement | React.ReactElement[]

  /**
   * Set this to prevent the menu to be opened under the unsafe area.
   * @default
   * { top: 0, bottom: 0, right: 0, left: 0 }
   *
   * @example
   * ```tsx
   * const insets = useSafeAreaInsets();
   * <Provider safeAreaInsets={insets} />
   * ```
   */
  safeAreaInsets?: EdgeInsets

  onOpen?: () => void
  onClose?: () => void
}
