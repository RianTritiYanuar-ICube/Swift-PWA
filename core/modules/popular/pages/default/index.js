/* eslint-disable react/destructuring-assignment */
import { withTranslation } from '@i18n';
import { withApollo } from '@lib_apollo';
import Core from '@core_modules/popular/pages/default/core';
import Content from '@core_modules/popular/pages/default/components';

const Page = (props) => (
    <Core
        {...props}
        Content={Content}
        pageConfig={{
            title: 'Popular', // props.t('checkout:pageTitle'),
            header: 'relative', // available values: "absolute", "relative", false (default)
            headerTitle: 'Popular', // props.t('checkout:pageTitle'),
            headerDesktop: false,
            footer: false,
            bottomNav: false,
            pageType: 'checkout',
        }}
    />
);

export default withApollo({ ssr: true })(withTranslation()(Page));
