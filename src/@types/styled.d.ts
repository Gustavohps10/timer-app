import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

export type ITheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}