import {
  Box,
  chakra,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
  Text,
  extendTheme,
  ThemeProvider,
  VisuallyHidden,
  Button,
} from "@chakra-ui/react";
import { validate } from "email-validator";
import * as React from "react";
import baseTheme from "landing-theme";
import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts
// Обратить внимание, названия переменных, например, darkHoverBg

const theme = extendTheme(baseTheme, {
  components: {
    Button: {
      variants: {
        outline: (props: Dict) => {
          const { colorScheme: c } = props;

          if (c === "black") {
            const hoverActiveStyle = {
              opacity: 0.8,
            } as const;

            return {
              _hover: hoverActiveStyle,
              _active: hoverActiveStyle,
            };
          }

          return {};
        },
      },
    },
    FormError: {
      baseStyle: {
        text: {
          lineHeight: 2,
        },
      },
    },
    Input: {
      variants: {
        flushed: ({ theme }: Dict) => {
          return {
            field: {
              borderBottomWidth: "2px",
              borderBottomColor: theme.colors.base.black,
            },
          };
        },
      },
      sizes: {
        lg: {
          field: {
            fontSize: "1.5rem",
            py: "20px",
            pr: "25px",
            h: "auto",
            pl: 0,
          },
        },
      },
    },
  },
});

// a6
// notice soc and coupling / knowledge
type FormFieldName = "email" | "firstName" | "lastName";

function getFieldError(name: FormFieldName, value: string) {
  const requiredMessage = "Please complete this required field.";

  switch (name) {
    case "email": {
      if (value.trim() === "") {
        return requiredMessage;
      } else if (!validate(value)) {
        return "Email must be formatted correctly.";
      }
    }
    case "firstName": {
      if (value.trim() === "") {
        return requiredMessage;
      }
    }
    case "lastName": {
      if (value.trim() === "") {
        return requiredMessage;
      }
    }
    default: {
      return null;
    }
  }
}

interface UseInputReturn {
  labelProps: (props: Omit<FormLabelProps, "htmlFor">) => FormLabelProps;
  inputProps: (
    props: Omit<
      InputProps,
      "value" | "id" | "name" | "onChange" | "onBlur" | "aria-describedby"
    >
  ) => InputProps;
  errorMessageProps: (
    props?: Omit<FormErrorMessageProps, "id" | "children">
  ) => FormErrorMessageProps;
  displayErrorMessage: boolean;
}

interface UseInputOptions {
  name: FormFieldName;
  wasSubmitted: boolean;
}

function useInput({ name, wasSubmitted }: UseInputOptions): UseInputReturn {
  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const errorMessage = getFieldError(name, value);
  const displayErrorMessage = !!((wasSubmitted || touched) && errorMessage);

  return {
    labelProps: (props) => ({
      ...props,
      htmlFor: `${name}-input`,
    }),
    inputProps: (props) => ({
      ...props,
      value,
      id: `${name}-input`,
      name,
      onChange: (event) => setValue(event.currentTarget.value),
      onBlur: () => setTouched(true),
      "aria-describedby": displayErrorMessage ? `${name}-error` : undefined,
    }),
    errorMessageProps: (props) => ({
      ...props,
      id: `${name}-error`,
      children: displayErrorMessage ? React.createElement(errorMessage) : null,
    }),
    displayErrorMessage,
  };
}

function DownloadGuideFormControl({
  formControlProps,
  formLabelProps,
  inputProps,
  errorMessageProps,
  ...inputOptions
}: {
  formControlProps: FormControlProps;
  formLabelProps: Parameters<UseInputReturn["labelProps"]>[0];
  inputProps: Parameters<UseInputReturn["inputProps"]>[0];
  errorMessageProps?: Parameters<UseInputReturn["errorMessageProps"]>[0];
} & UseInputOptions) {
  const inputResult = useInput(inputOptions);

  return (
    <FormControl {...formControlProps}>
      <FormLabel
        as={VisuallyHidden}
        {...inputResult.labelProps(formLabelProps)}
      />
      <Input
        {...inputResult.inputProps(inputProps)}
        variant="flushed"
        size="lg"
      />
      {inputResult.displayErrorMessage ? (
        <FormErrorMessage
          {...inputResult.errorMessageProps(errorMessageProps)}
        />
      ) : null}
    </FormControl>
  );
}

function DownloadGuide() {
  const [wasSubmitted, setWasSubmitted] = React.useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(
      (formData as any).entries()
    ) as Record<FormFieldName, string>;
    const formIsValid = Object.entries(fieldValues).every(
      (x) => !getFieldError(x[0] as FormFieldName, x[1])
    );
    setWasSubmitted(true);
    if (formIsValid) {
      console.log(`Form Submitted`, fieldValues);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        alignItems={{ md: "flex-start", base: "stretch" }}
        justifyContent={{ md: "space-between", base: "flex-start" }}
        flexDirection={{ base: "column", md: "row-reverse" }}
      >
        <Box w={{ base: "full", md: "50%" }}>
          <Text as="h2" textStyle="headline" mb="15px" fontSize="46px">
          Sed vel cursus dolor
          </Text>
          <Text fontSize={"20px"} textStyle="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel cursus dolor
          </Text>
          <Box pb="30px">
            <form noValidate onSubmit={handleSubmit}>
              <chakra.fieldset borderWidth={0} p={0} m={0} display="flex">
                <DownloadGuideFormControl
                  formControlProps={{ flex: "1 1 50%" }}
                  inputProps={{ type: "email" }}
                  formLabelProps={{ children: <>Email</> }}
                  name="email"
                  wasSubmitted={wasSubmitted}
                />
              </chakra.fieldset>
              <Button variant="outline" colorScheme="black" size="lg" mt="10px">
                Download
              </Button>
            </form>
          </Box>
        </Box>
        <Box
          w={{ base: "full", md: "44%" }}
          pb={{ base: 0, md: "40px" }}
          mt={{
            base: "30px",
            md: 0,
          }}
          px={{ base: "20px", md: 0 }}
        ></Box>
      </Box>
    </ThemeProvider>
  );
}

// a6 end

export { DownloadGuide };
