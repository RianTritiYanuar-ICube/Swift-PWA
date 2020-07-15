/* eslint-disable jsx-a11y/anchor-is-valid */
import Select from '@components/Forms/Select';
import { useTranslation } from '@i18n';

const ItemField = ({
    options = [],
    name = 'select',
    label = 'Select',
    onSelect = () => {},
    propsValue = {},
    errorForm = false,
    errorMessage = '',
    required = false,
    ...other
}) => {
    const { t } = useTranslation(['rma']);
    const [select, setSelect] = React.useState('');
    const handleSelect = (event) => {
        setSelect(event.target.value);
        onSelect({
            ...propsValue,
            value: event.target.value,
        });
    };
    let error = false;
    if (errorForm && required) {
        if (select === '' || select.length === 0) error = true;
    }
    return (
        <Select
            options={options}
            name={name}
            label={label}
            value={select}
            onChange={handleSelect}
            error={error}
            errorMessage={errorMessage || t('rma:form:required')}
            {...other}
        />
    );
};

export default ItemField;
