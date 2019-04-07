function compose(middlewares) {
  return function(context, next) {
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      index = i;
      let fn = middlewares[index];
      if (i === middlewares.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

async function a(ctx, next) {
  console.log(1);
  const hello = await Promise.resolve("hello node js");
  console.log(hello);
  await next();
  console.log("a end");
}

async function b(ctx, next) {
  console.log(2);
  const hello = await Promise.resolve("hello node js");
  console.log(hello);
  await next();
  console.log("b end");
}

compose([a, b])({});
