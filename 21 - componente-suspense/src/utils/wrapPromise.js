const wrapPromise = (promise) => {
    let status = 'pending';
    let result;
    const suspender = promise.then(
        (r) => {
            status = 'success';
            result = r;
        },
        (e) => {
            status = 'error';
            result = e;
        }
    );
    const handler = {
        pending: () => {
            throw suspender;
        },
        error: () => {
            throw result;
        },
        success: () => result,
    };
    const read = () => {
        return handler[status] ? handler[status]() : handler.success();
    }
    return { read };
};

export default wrapPromise;