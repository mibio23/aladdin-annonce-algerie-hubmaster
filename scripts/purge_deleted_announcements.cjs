const { Client } = require("pg");

function shouldUseSsl() {
  const mode = String(process.env.PGSSLMODE || "").toLowerCase();
  if (mode === "disable") return false;
  if (mode === "require" || mode === "verify-full" || mode === "verify-ca") return true;

  const explicit = String(process.env.DATABASE_SSL || "").toLowerCase();
  if (explicit === "true" || explicit === "1" || explicit === "yes") return true;
  if (explicit === "false" || explicit === "0" || explicit === "no") return false;

  const url = String(process.env.DATABASE_URL || "");
  return /sslmode=/i.test(url);
}

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL env var");
  }

  const client = new Client({
    connectionString,
    ssl: shouldUseSsl() ? { rejectUnauthorized: false } : undefined,
  });

  await client.connect();
  try {
    const sql = `
      WITH deleted AS (
        DELETE FROM public.announcements
        WHERE status = 'deleted'
          AND shop_id IS NULL
          AND deleted_at IS NOT NULL
          AND deleted_at < now() - INTERVAL '30 days'
        RETURNING 1
      )
      SELECT COUNT(*)::int AS deleted_count FROM deleted;
    `;

    const res = await client.query(sql);
    const deletedCount = res.rows?.[0]?.deleted_count ?? 0;
    console.log(JSON.stringify({ ok: true, deletedCount }, null, 2));
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(JSON.stringify({ ok: false, error: String(err?.message || err) }, null, 2));
  process.exit(1);
});
