export const isRequired = (value) => {
    let error;
    if (!value) {
        error = "Required field";
    }
    return error
};

export const maxLength = (length) => (value) => {
    let error;
    if (value && value.length > length) {
        error = `Max Length is ${length} Symbols`
    }
    return error
}

export const validGithubLink = (value) => {
    let error;
    if (value && !value.startsWith("https://github.com/")) {
        error = "Github link is incorrect"
    }
    return error
}

export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);