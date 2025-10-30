import { ref } from "vue";
import Validator from "../app/validator/index.js";

export default function useValidator() {
    const errors = ref({});

    const validate = (data, rules, messages = {}) => {
        const validator = new Validator({
            data,
            rules,
            messages,
        });

        const isValid = validator.validate();
        errors.value = validator.errors;
        return isValid;
    };

    const clearError = (field) => {
        if (errors.value[field]) {
            delete errors.value[field];
        }
    };

    return {
        errors,
        validate,
        clearError
    };
}
