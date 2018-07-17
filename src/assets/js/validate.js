export let validate = {
    checkPhone: checkPhone,
    isEmpty: isEmpty,
};

function checkPhone(num) {
    if (!(/^1[3|4|5|7|8]\d{9}$/.test(num))) {
        return false;
    } else {
        return true;
    }
};

function isEmpty(str) {
    str = str || ''
    if (/^\s*$/.test(str)) {
        return true;
    } else {
        return false;
    }
};
