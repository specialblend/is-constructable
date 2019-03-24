const isConstructable = fn => {
    try {
        Reflect.construct(String, [], fn);
    } catch (e) {
        return false;
    }
    return true;
};

export default isConstructable;
