import React from 'react';
import { inject, observer } from 'mobx-react';
import { IntlProvider } from 'react-intl';
import Language from '@Models/User/Language';

import en_US from './Locale/en_US';
import zh_CN from './Locale/zh_CN';

const message: { [propName: string]: any } = {
    'en-US': en_US,
    'zh-CN': zh_CN
};

export default function withIntl(WrappedComponent: React.ComponentType) {

    return inject('userStore')(
        observer(
            (
                class extends React.Component<any> {
                    render() {
                        return (
                            <IntlProvider
                                locale={this.props.userStore.lang}
                                defaultLocale={Language.English}
                                messages={message[this.props.userStore.lang]}>
                                <WrappedComponent />
                            </IntlProvider>
                        );
                    }
                }
            )
        ),
    );
}