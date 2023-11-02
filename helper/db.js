import database from "../boot/db.js"

export async function openDbConnections() {
    const dbNames = Object.keys(database)
    const results = await Promise.allSettled(
      Object.values(database).map((db) => db.authenticate())
    )
    if (results.every(({ status }) => status === 'fulfilled')) {
      console.log(
        `🤘 [model] All ${dbNames.length} connections have been established successfully!`
      )
    } else {
      for (const [index, { status, reason }] of results.entries()) {
        if (status === 'rejected') {
          console.log(
            `⚠️ [model] Unable to connect to the ${dbNames[index]} DB:`,
            reason
          )
        }
      }
      // TODO: 1+ DBs are not open: we should exit, shouldn't we?
    }
  }