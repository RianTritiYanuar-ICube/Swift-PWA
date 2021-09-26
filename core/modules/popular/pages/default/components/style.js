import makeStyles from '@material-ui/core/styles/makeStyles';
import { GRAY_PRIMARY } from '@theme_color';
import {
    CreateBorder,
    FlexColumn,
} from '@theme_mixins';

export default makeStyles(() => ({
    root: {
        ...FlexColumn,
        height: '100vh',
        width: '100%',
    },
    newCard: {
        ...CreateBorder('1px', '1px', '1px', '1px', GRAY_PRIMARY),
    },
}));
