import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import EyeIcon from 'assets/images/eye.svg';
import EyeSlashIcon from 'assets/images/eyeSlash.svg';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { validate } from 'validate.js';

import Utils from 'Utils';
import { auth, database } from 'Utils/firebase';

import {
  Button,
  KeyboardSpacer,
  ScrollView,
  Text,
  TextField,
} from 'Components/UI';
import { Column, Row } from 'Components/UI/View';

enum FormFields {
  Name = 'name',
  Email = 'email',
  Mobile = 'mobile',
  Password = 'password',
}

interface FormValues {
  [FormFields.Name]: string;
  [FormFields.Email]: string;
  [FormFields.Mobile]: string;
  [FormFields.Password]: string;
}

function RegisterScreen({ navigation }: any) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = useMemo(
    () => ({
      [FormFields.Email]: '',
      [FormFields.Password]: '',
      [FormFields.Mobile]: '',
    }),
    [],
  );

  const constraints = useMemo(
    () => ({
      [FormFields.Name]: {
        presence: {
          allowEmpty: false,
        },
      },
      [FormFields.Email]: {
        presence: {
          allowEmpty: false,
        },
        email: {
          email: true,
        },
      },
      [FormFields.Mobile]: {
        presence: {
          allowEmpty: false,
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
    async ({ name, email, mobile, password }: FormValues) => {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        set(ref(database, `/users/${response.user.uid}`), {
          name,
          email,
          mobile,
          id: response.user.uid,
        });
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
            <Field name={FormFields.Name}>
              {({ input: { value, onChange } }) => (
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  error={errors[FormFields.Name]}
                  label={t('name') as string}
                  mb={6}
                  placeholder={t('name') as string}
                  value={value}
                  autoFocus
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
                  onChange={onChange}
                />
              )}
            </Field>

            <Field name={FormFields.Mobile}>
              {({ input: { value, onChange } }) => (
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  error={errors[FormFields.Mobile]}
                  label={t('phone') as string}
                  mb={6}
                  placeholder={t('phone') as string}
                  value={value}
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
          </ScrollView>
          <Column px={5}>
            <Button
              loading={submitting}
              mt={6}
              title={t('signUp')}
              onPress={handleSubmit}
            />
            <Row alignCenter justifyCenter>
              <Text>{t('alreadyHaveAnAccount')}</Text>
              <Button
                ml={2}
                title={t('login')}
                link
                onPress={() => {
                  navigation.navigate('Login');
                }}
              />
            </Row>
          </Column>
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

export default RegisterScreen;
