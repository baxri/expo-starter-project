import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import EyeIcon from 'assets/images/eye.svg';
import EyeSlashIcon from 'assets/images/eyeSlash.svg';
import * as AppleAuthentication from 'expo-apple-authentication';
import { makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { DateTime } from 'luxon';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { validate } from 'validate.js';

import { setIdToken } from 'Services/Store/session';

import Utils from 'Utils';
import { auth } from 'Utils/firebase';

import {
  Button,
  DateTimePicker,
  Dropdown,
  KeyboardSpacer,
  ScrollView,
  Text,
  TextField,
} from 'Components/UI';
import { Column, Row } from 'Components/UI/View';

const iosClientId =
  '1079461435271-q2nu57j4rbiqspu0n1f3iqc2hjc3h8ag.apps.googleusercontent.com';
const clientId =
  '1079461435271-hieen1oud7egsvp035bg8p8074eprsff.apps.googleusercontent.com';

WebBrowser.maybeCompleteAuthSession();

enum FormFields {
  Email = 'email',
  Password = 'password',
  Date = 'date',
  Type = 'type',
}

interface FormValues {
  [FormFields.Email]: string;
  [FormFields.Password]: string;
  [FormFields.Date]: string;
  [FormFields.Type]: string;
}

function LoginScreen({ navigation }: any) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const [googleItToken, setGoogleIDToken] = useState('');
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId,
    // androidClientId: AuthConfig.androindClientId,
    iosClientId,
    // redirectUri: makeRedirectUri({
    //   useProxy: true,
    //   // scheme: 'https://auth.expo.io/@asidorov01/blapp'
    //   scheme: 'https://auth.expo.io/@baxri/starter-project',
    // }),
  });

  const handleGoogleLogin = useCallback(async () => {
    if (!response || response.type !== 'success') return;
    const { id_token } = response.params;
    setGoogleIDToken(id_token);
  }, [response, promptAsync]);

  useEffect(() => {
    handleGoogleLogin();
  }, [handleGoogleLogin]);

  const initialValues = useMemo(
    () => ({
      [FormFields.Email]: '',
      [FormFields.Password]: '',
      [FormFields.Type]: 'development',
      [FormFields.Date]: DateTime.now(),
    }),
    [],
  );

  const constraints = useMemo(
    () => ({
      [FormFields.Email]: {
        presence: {
          allowEmpty: false,
        },
        email: {
          email: true,
        },
      },
      [FormFields.Password]: {
        presence: {
          allowEmpty: false,
        },
      },
    }),
    [],
  );

  const handleFormValidate = useCallback(
    (values: any) => validate(values, constraints),
    [constraints],
  );

  const handleFormSubmit = useCallback(
    async ({ email, password }: FormValues) => {
      try {
        setIdToken('j34h5bj3h45bhj345bjh34b5jh345hj34b5jh34b5jh34');
      } catch (error: any) {
        Alert.alert(error.message);
      }
    },
    [],
  );

  const renderForm = useCallback(
    ({ form, handleSubmit, submitting }: any) => {
      const errors = Utils.Form.getFormErrors<FormValues>(form, FormFields, {
        checkDirty: true,
      });

      return (
        <Column bg="white" stretch>
          <ScrollView keyboardShouldPersistTaps="handled" px={5} py={6}>
            <Field name={FormFields.Type}>
              {({ input: { value, onChange } }) => (
                <Dropdown
                  label="Server type"
                  mb={6}
                  options={[
                    { title: 'Production', id: 'production' },
                    { title: 'Development', id: 'development' },
                  ]}
                  value={value}
                  onChange={onChange}
                />
              )}
            </Field>
            <Field name={FormFields.Date}>
              {({ input: { value, onChange } }) => (
                <DateTimePicker
                  label="Date"
                  mb={6}
                  value={value}
                  onChange={onChange}
                />
              )}
            </Field>
            <Field name={FormFields.Email}>
              {({ input: { value, onChange } }) => (
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  error={errors[FormFields.Email]}
                  label={t('email') as string}
                  mb={6}
                  placeholder={t('email') as string}
                  value={value}
                  autoFocus
                  onChange={onChange}
                />
              )}
            </Field>

            <Field name={FormFields.Password}>
              {({ input: { value, onChange } }) => (
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  endAccessory={
                    showPassword ? (
                      <TextField.Accessory
                        onPress={() => setShowPassword(false)}
                      >
                        <EyeSlashIcon />
                      </TextField.Accessory>
                    ) : (
                      <TextField.Accessory
                        onPress={() => setShowPassword(true)}
                      >
                        <EyeIcon />
                      </TextField.Accessory>
                    )
                  }
                  error={errors[FormFields.Password]}
                  label={t('password') as string}
                  placeholder={t('password') as string}
                  returnKeyType="go"
                  secureTextEntry={!showPassword}
                  value={value}
                  onChange={onChange}
                />
              )}
            </Field>
            <Button
              loading={submitting}
              mt={6}
              title="Google Login"
              onPress={() => promptAsync()}
            />
            <Button
              loading={submitting}
              mt={6}
              title="Apple Login"
              onPress={async () => {
                try {
                  const credential = await AppleAuthentication.signInAsync({
                    requestedScopes: [
                      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                      AppleAuthentication.AppleAuthenticationScope.EMAIL,
                    ],
                  });

                  console.log('credential', credential.identityToken);
                  // signed in
                } catch (e: any) {
                  if (e.code === 'ERR_REQUEST_CANCELED') {
                    // handle that the user canceled the sign-in flow
                  } else {
                    // handle other errors
                  }
                }
              }}
            />

            <Button
              loading={submitting}
              mt={6}
              title="Set Test Id Token"
              onPress={handleSubmit}
            />
          </ScrollView>
          {/* <Column px={5}>
            <Button
              loading={submitting}
              mt={6}
              title="Google Login"
              onPress={() => promptAsync()}
            />
            <Button
              loading={submitting}
              mt={6}
              title={t('login')}
              onPress={handleSubmit}
            />
            <Row alignCenter justifyCenter>
              <Text>{t('doNothaveAnAccountYet')}</Text>
              <Button
                ml={2}
                title={t('signUp')}
                link
                onPress={() => {
                  navigation.navigate('Register');
                }}
              />
            </Row>
          </Column> */}
          <KeyboardSpacer />
        </Column>
      );
    },
    [showPassword],
  );

  return (
    <Form
      initialValues={initialValues}
      render={renderForm}
      validate={handleFormValidate}
      onSubmit={handleFormSubmit}
    />
  );
}

export default LoginScreen;
