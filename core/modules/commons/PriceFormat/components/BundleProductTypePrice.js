import Typography from '@common_typography';
import { formatPrice } from '@helper_currency';
import classNames from 'classnames';
import useStyles from '../style';

const BundleProductTypePrice = (props) => {
    const styles = useStyles();
    const { priceRange } = props;
    if (priceRange.maximum_price.final_price.value === priceRange.minimum_price.final_price.value) {
        return (
            <Typography variant="span" type="bold" letter="uppercase" className={classNames(styles.noMargin, 'price_text')}>
                {formatPrice(priceRange.minimum_price.final_price.value, priceRange.minimum_price.final_price.currency)}
            </Typography>
        );
    }
    return (
        <>
            <Typography
                variant="span"
                size="5"
                letter="uppercase"
                className={classNames(styles.noMargin)}
            >
                From
                {' '}
            </Typography>
            <Typography variant="span" type="bold" letter="uppercase" className={classNames(styles.noMargin, 'price_text')}>
                {formatPrice(priceRange.minimum_price.final_price.value, priceRange.minimum_price.final_price.currency)}
            </Typography>
            <Typography
                variant="span"
                size="5"
                letter="uppercase"
                className={classNames(styles.noMargin)}
            >
                To
                {' '}
            </Typography>
            <Typography variant="span" type="bold" letter="uppercase" className={classNames(styles.noMargin, 'price_text')}>
                {formatPrice(priceRange.maximum_price.final_price.value, priceRange.maximum_price.final_price.currency)}
            </Typography>
        </>
    );
};

export default BundleProductTypePrice;
