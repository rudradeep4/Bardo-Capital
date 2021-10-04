import { Formik, Field, Form } from "formik";
import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Icon
} from '@chakra-ui/react';
import { BsBoxArrowInRight } from "react-icons/bs";
import { useButtonIcon } from "../hooks";


const LoginForm = () => {

    const loginIcon = useButtonIcon()

    return (
            <Formik>
                {(props) => 
                    <Form>
                        <Field name="email">
                            {() => (
                                <FormControl id="email" isRequired pb={5}>
                                    <FormLabel>Email ID</FormLabel>
                                    <Input type="email" w={400} borderColor="accent" size="sm" focusBorderColor="accent" _hover="accent"/>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password">
                            {() => (
                                <FormControl id="password" isRequired pb={2}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" w={400} borderColor="accent" size="sm" focusBorderColor="accent" _hover="accent"/>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            type="submit"
                            variant="normal"
                            onMouseOver={loginIcon.showIcon}
                            onMouseOut={loginIcon.noIcon}
                            leftIcon={loginIcon.show ? <Icon as={BsBoxArrowInRight} /> : null}
                        >
                            Login
                        </Button>
                    </Form>
                }
            </Formik>
    )
}

export default LoginForm