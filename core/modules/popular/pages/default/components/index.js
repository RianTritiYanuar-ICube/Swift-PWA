import React from 'react';
import classNames from 'classnames';
import useStyles from '@core_modules/popular/pages/default/components/style';

const Content = () => {
    const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];
    const styles = useStyles();

    /**
     * [VIEW]
     */
    return (
        <div className="container">
            <h1>Popular</h1>
            <div className="row">
                {dummyData.map((data, key) => (
                    <div key={key} className={classNames(styles.newCard, 'col-xs-6 col-md-3')}>
                        <h5>{`Data ke-${data}`}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
