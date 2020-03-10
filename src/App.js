import React, {Component} from 'react';
import {StatusBar, View, Text, Image, Platform} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
// import NetInfo from '@react-native-community/netinfo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Navigation from './components/navigation';
import Colors from './helpers/Colors';
import {store, persist} from './redux/reducers';
import LoadingIndicator from './components/common/LoadingIndicator';
import strings from './localization';
import {styles, theme} from './styles';
import NavigationService from './helpers/NavigationService';

const appLogo = require('./assets/logo/sparcks.png');

class App extends Component {
    state = {
        ready: false,
        isConnected: false,
    };

    componentDidMount() {
        persist(() => {
            this.setState({ready: true});
        });
        // NetInfo.addEventListener(state => {
        //     if (state.isConnected) {
        //         this.handleConnectivityChange();
        //     }
        // });
    }

    componentWillUnmount() {
        //NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = () => {
        this.setState({isConnected: true});
    };

    _renderEmpty = () => {
        if (Platform.OS === 'ios') {
            return <LoadingIndicator />;
        }
        return (
            <View style={styles.logoContainer}>
                <Image resizeMode="contain" style={styles.logo} source={appLogo}/>
            </View>
        );
    };

    _renderNoInternet = () => (
        <View style={styles.noInternetContainer}>
            <View style={styles.noInternetContent}>
                <FeatherIcon name="wifi" size={90} style={{margin: 'auto'}} color={Colors.primaryBlue} solid/>
            </View>
            <Text style={styles.textBold}>{strings.no_internet_connection}</Text>
            <Text style={styles.text}>{strings.check_internet_connection}</Text>
        </View>
    );

    render() {
        const {ready} = this.state;
        if (!ready) {
            return this._renderEmpty();
        }
        return (
            <StoreProvider store={store}>
                <PaperProvider theme={theme}>
                    <StatusBar backgroundColor={Colors.primaryWhite} barStyle="dark-content" animated/>
                    {this.state.isConnected ? (
                        <Navigation ref={(navigatorRef) => {
                                NavigationService.setTopLevelNavigator(navigatorRef);
                            }}
                        />
                    ) : (
                        this._renderNoInternet()
                    )}
                </PaperProvider>
            </StoreProvider>
        );
    }
}

export default App;
