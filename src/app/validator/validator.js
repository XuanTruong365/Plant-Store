// Validator.js
import validator from 'validator';
import { isString, get as _get } from 'lodash';
import dayjs from 'dayjs';

export default class Validator {
    data = {};
    rules = {};
    errors = {};
    messages = {};

    _defaultMessages = {
        required: ':field không được để trống.',
        email: ':field phải là email hợp lệ.',
        numeric: ':field chỉ được chứa số.',
        boolean: ':field chỉ có thể là true hoặc false.',
        max255: ':field không vượt quá 255 ký tự.',
        checkRegex: ':field chỉ chấp nhận chữ và số.',
        validImageExtensions: 'Chỉ chấp nhận định dạng: png, jpeg, jpg, svg, gif.',
        string: ':field phải là chuỗi.',
        validImageSize: 'Dung lượng ảnh phải nhỏ hơn :param Mb.',
        isArray: ':field phải là danh sách.',
        minLength: ':field phải có độ dài tối thiểu :param ký tự.',
        maxLength: ':field vượt quá giới hạn cho phép.',
        maxNumber: ':field vượt quá giá trị cho phép.',
        validFileExtensions: 'File không đúng định dạng được hỗ trợ.',
        requiredArrayNotEmpty: 'Danh sách phải có ít nhất một phần tử.',
        afterToday: ':field phải >= ngày hôm nay.',
        mimes: 'File không đúng định dạng được phép.'
    };

    constructor({ data = {}, rules = {}, messages = {} } = {}) {
        this.data = data;
        this.rules = rules;
        this.messages = messages;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    setRules(rules) {
        this.rules = rules;
        return this;
    }

    setMessages(messages) {
        this.messages = messages;
        return this;
    }

    validate() {
        this.errors = {};

        for (let field in this.rules) {
            const ruleList = this.rules[field].split('|');

            for (let rule of ruleList) {
                const [ruleName, param] = rule.split(':');
                const value = this.data[field];

                if (typeof this[ruleName] === 'function') {
                    if (this.accessNull(value, param, ruleList)) break

                    const valid = this[ruleName](value, param, ruleList);

                    if (!valid) {
                        this.errors[field] = this.getErrorMessage(field, ruleName, param);
                        break;
                    }
                }
            }
        }
        return Object.keys(this.errors).length === 0;
    }

    // RULES -----------------------
    required(v) {
        if (v === null || v === undefined) return false;
        return String(v).trim().length > 0;
    }

    email(v, p, rules) {
        if (this.accessNull(v, p, rules)) return true;
        return validator.isEmail(String(v || ''));
    }

    accessNull(value, param, rules) {
        return rules?.includes('nullable') && (value === '' || value === null);
    }

    string(v) {
        return isString(v);
    }

    numeric(v) {
        return validator.isNumeric(String(v || ''));
    }

    maxLength(v, max) {
        return String(v || '').length <= Number(max);
    }

    minLength(v, min) {
        if (!v) return false;
        return String(v).length >= Number(min);
    }

    image(v) {
        if (!v?.type) return false;
        return v.type.startsWith("image/");
    }

    maxFileSize(v, maxMb) {
        if (!v) return true;
        const maxBytes = Number(maxMb) * 1024 * 1024;
        return v.size <= maxBytes;
    }

    max255(v) {
        return this.maxLength(v, 255);
    }

    maxNumber(v, max) {
        return Number(v) <= Number(max);
    }

    boolean(v) {
        return typeof v === 'boolean';
    }

    isArray(v) {
        return Array.isArray(v);
    }

    requiredArrayNotEmpty(v) {
        return Array.isArray(v) && v.length > 0;
    }

    url(v) {
        if (!v) return true;
        return validator.isURL(String(v));
    }

    checkRegex(v, regex) {
        const pattern = new RegExp(regex);
        return pattern.test(v);
    }

    eq(v, targetField) {
        return v === this.data[targetField];
    }

    mimes(value, allowed) {
        if (!value?.type) return false;

        const valid = allowed.split(',').map(e => e.trim().toLowerCase());
        let ext = value.type.split('/').pop().toLowerCase();
        if (ext === 'svg+xml') ext = 'svg';

        return valid.includes(ext);
    }

    validImageExtensions(files) {
        if (!Array.isArray(files)) return false;
        const exts = ['png', 'jpg', 'jpeg', 'gif', 'svg'];
        return files.every(f => {
            const ext = f?.type?.split('/').pop().toLowerCase();
            return exts.includes(ext);
        });
    }

    validImageSize(files, maxSizeMb) {
        if (!Array.isArray(files)) return false;
        const maxBytes = maxSizeMb * 1024 * 1024;
        return files.every(f => f.size <= maxBytes);
    }

    nullable(v) {
        return true;
    }

    afterToday(v) {
        return dayjs(v).endOf('day').isAfter(dayjs().endOf('day'));
    }

    // ERROR FORMAT -------------
    getErrorMessage(field, rule, param) {
        let msg = _get(this.messages, `${field}.${rule}`)
            || this._defaultMessages[rule]
            || `${field} không hợp lệ`;

        return msg.replace(':field', field).replace(':param', param);
    }

    reset() {
        this.data = {};
        this.rules = {};
        this.messages = {};
        this.errors = {};
    }
}
