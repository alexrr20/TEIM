import React, {useEffect} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

function Login(navigation) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  useEffect(() => console.log('Email error:', errors?.email), [errors?.email]);
  useEffect(
    () => console.log('Password error:', errors?.password),
    [errors?.password],
  );

  const onSubmit = data => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email obrigatorio',
          pattern: {
            message: 'Email inválido',
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          },
        }}
        render={({field: {value, onChange}}) => (
          <TextInput
            placeholder="email"
            value={value}
            onTextChange={onChange}
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Palavra Passe obrigatoria',
          minLength: 3,
        }}
        render={({field: {value, onChange}}) => (
          <TextInput
            placeholder="password"
            value={value}
            onTextChange={onChange}
            secureTextEntry
          />
        )}
      />
      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}

export default Login;
