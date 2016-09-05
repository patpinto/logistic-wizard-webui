import getMuiTheme from 'material-ui/styles/getMuiTheme';
import colors from './base/_colors.scss';

export const palette = {
  primary1Color: colors.primary1Color,
  primary2Color: colors.primary2Color,
  accent1Color: colors.accent1Color,
  alternateTextColor: colors.alternateTextColor,
  borderColor: colors.borderColor,
  textColor: colors.textColor,
};

const muiTheme = getMuiTheme({
  fontFamily: 'Helvetica Neue',
  palette,
});

export default muiTheme;
