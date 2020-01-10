import React, {Component} from 'react';
import {Image, StatusBar, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';
import ErrorView from 'components/common/ErrorView';
import styles from './styles';
import getUser from '../../redux/selectors/UserSelectors';
import getToken from '../../redux/selectors/TokenSelectors';
import errorsSelector from '../../redux/selectors/ErrorSelectors';
import {fullStatusSelector} from '../../redux/selectors/StatusSelectors';
import validate from 'helpers/FormValidators';
import strings from 'localization/index';
import {login, logout, actionTypes} from '../../redux/actions/user';
class Login extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
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
        if (this.props.fullStatus.isLoading) this.props.logout();
    }
    componentDidUpdate() {
        this.navigateToHomeIfLogged();
        return null;
    }
    usernameChanged = value => this.setState({username: value});
    passwordChanged = value => this.setState({password: value});
    navigateToHomeIfLogged = () => {
        //console.log('navigateToHomeIfLogged - Login.js: ', this.props.user);
        const {user, navigation, token} = this.props;
        console.log('-------------------------------------------------------LOGIN.JS-------------');
        console.log('Login.js user !== null: ', user !== null);
        console.log('Login.js user: ', user);
        console.log('Login.js token: ', token);
        if (user !== null) {
            navigation.navigate('App');
        }
    };
    login = () => {
        this.props.login(this.state.username, this.state.password);
    };
    validateData = fieldName => {
        const {errors} = this.state;
        errors[fieldName] = validate(fieldName, this.state[fieldName]);
        const validationError = Boolean(Object.values(errors).filter(error => error).length);
        this.setState({
            errors,
            validationError,
        });
    };
    render() {
        const {fullStatus, errors} = this.props;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
                <Image
                    style={styles.logo}
                    source={require('assets/logo/sparcks.png')}
                />
                <TextField
                    placeholder={strings.username}
                    autoCapitalize="none"
                    value={this.state.username}
                    error={this.state.errors.username}
                    onChangeText={this.usernameChanged}
                    onBlur={() => this.validateData('username')}
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
                <ErrorView errors={errors} />
                <Button
                    disabled={
                        fullStatus.isLoading ||
                        !this.state.username.length ||
                        !this.state.password.length
                    }
                    onPress={this.login}
                    title={
                        fullStatus.isLoading ? strings.loading : strings.login
                    }
                />
            </KeyboardAvoidingView>
        );
    }
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    user: PropTypes.object,
    token: PropTypes.object,
    fullStatus: PropTypes.object.isRequired,
    errors: PropTypes.array,
};
Login.defaultProps = {
    user: null,
    token: null,
    errors: [],
};
const mapStateToProps = state => ({
    user: getUser(state),
    token: getToken(state),
    fullStatus: fullStatusSelector([actionTypes.LOGIN], state),
    errors: errorsSelector([actionTypes.LOGIN], state),
});
const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password)),
    logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
