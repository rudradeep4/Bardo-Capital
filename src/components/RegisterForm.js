import { Formik, Field, Form } from "formik";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Icon,
    ButtonGroup
} from '@chakra-ui/react';
import { BsPersonPlusFill } from "react-icons/bs"
import { MdCancel } from "react-icons/md"
import { useHistory } from "react-router";
import { useButtonIcon } from "../hooks";

const RegisterForm = () => {
    const createIcon = useButtonIcon()
    const cancelIcon = useButtonIcon()
    const history = useHistory()

    const handleClick = () => {
        history.push("/auth")
    }

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
                            <FormControl id="password" isRequired pb={5}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" w={400} borderColor="accent" size="sm" focusBorderColor="accent" _hover="accent"/>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="rePassword">
                        {() => (
                            <FormControl id="rePassword" isRequired pb={5}>
                                <FormLabel>Confirm password</FormLabel>
                                <Input type="password" w={400} borderColor="accent" size="sm" focusBorderColor="accent" _hover="accent"/>
                            </FormControl>
                        )}
                    </Field>
                    <ButtonGroup spacing={10}>
                        <Button
                            type="submit"
                            variant="normal"
                            onMouseOver={createIcon.showIcon}
                            onMouseOut={createIcon.noIcon}
                            leftIcon={createIcon.show ? <Icon as={BsPersonPlusFill} /> : null}
                        >
                            Create Account
                        </Button>
                        <Button
                            type="button"
                            variant="normal"
                            onMouseOver={cancelIcon.showIcon}
                            onMouseOut={cancelIcon.noIcon}
                            leftIcon={cancelIcon.show ? <Icon as={MdCancel} /> : null}
                            onClick={handleClick}
                        >
                            Cancel
                        </Button>
                    </ButtonGroup>
                </Form>
            }
        </Formik>
    )
}

export default RegisterForm