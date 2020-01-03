import React, {Component} from 'react';
import {Image, StatusBar, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Button from '../common/Button';
import TextField from '../common/TextField';
import ErrorView from '../common/ErrorView';
import styles from './styles';

import getUser from '../../selectors/UserSelectors';
import errorsSelector from '../../selectors/ErrorSelectors';
import {fullStatusSelector} from '../../selectors/StatusSelectors';
import validate from '../../helpers/FormValidators';
import strings from '../../localization';
import {login, logout, actionTypes} from '../../actions/UserActions';

class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.navigateToHomeIfLogged();
    }

    state = {
        username: '',
        password: '',
        errors: {
            username: null, password: null,
        },
        validationError: false,
    };

    componentDidMount(): void {
        if (this.props.fullStatus.isLoading) {
            this.props.logout();
        }
    }

    componentDidUpdate() {
        this.navigateToHomeIfLogged();
        return null;
    }

    usernameChanged = value => this.setState({username: value});
    passwordChanged = value => this.setState({password: value});


    navigateToHomeIfLogged = () => {
        if (this.props.user.user !== null) {
            this.props.navigation.navigate('App');
        }
    };

    login = () => {
        this.props.login(this.state.username, this.state.password)
            .then(() => {
                const {errors} = this.props;
                if (!errors.length) {
                    this.props.navigation.navigate('App');
                }
            });
    };

    validateData = (fieldName) => {
        const {errors} = this.state;

        errors[fieldName] = validate(fieldName, this.state[fieldName]);
        const validationError = Boolean(Object.values(errors).filter(error => error).length);

        this.setState({
            errors, validationError,
        });
    };

    render() {
        const {fullStatus, errors} = this.props;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
                <Image style={styles.logo} source={require('../../assets/logo/sparcks.png')}/>
                <TextField
                    placeholder={strings.username}
                    autoCapitalize="none"
                    value={this.state.username}
                    error={this.state.errors.username}
                    onChangeText={this.usernameChanged}
                    onBlur={() => this.validateData('email')}
                    returnKeyType="next"
                />
                <TextField
                    placeholder={strings.password}
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={this.passwordChanged}
                    onBlur={() => this.validateData('password')}
                    secureTextEntry
                    returnKeyType="go"
                />
                <ErrorView errors={errors}/>
                <Button
                    disabled={fullStatus.isLoading || !this.state.username.length || !this.state.password.length}
                    onPress={this.login}
                    title={fullStatus.isLoading ? strings.loading : strings.login}
                />
            </KeyboardAvoidingView>
        );
    }

}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.object,
    fullStatus: PropTypes.object.isRequired,
    errors: PropTypes.array,
};

Login.defaultProps = {
    user: null,
    errors: [],
};

const mapStateToProps = state => ({
    user: getUser(state),
    fullStatus: fullStatusSelector([actionTypes.LOGIN], state),
    errors: errorsSelector([actionTypes.LOGIN], state),
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password)),
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

