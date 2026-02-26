import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", async () => ({ status: "ok", message: "API is running" }));

fastify.get("/health", async () => ({ status: "healthy" }));

fastify.get("/ip", async () => {
  const res = await fetch("https://ifconfig.me/ip");
  const ip = (await res.text()).trim();
  return { ip };
});

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000;
    await fastify.listen({ port, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
