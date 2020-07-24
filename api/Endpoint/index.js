module.exports = async function (context, req) {
  const header = req.headers["x-ms-client-principal"];
  const encoded = Buffer.from(header, "base64");
  const decoded = encoded.toString("ascii");
  const customer = context.req.query.customer
  req.
    context.res = {
      body: {
        text: decoded,
        customer: customer
      }
    };
  };