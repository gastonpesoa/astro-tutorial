import { defineDb, defineTable, column  } from 'astro:db';

const UserData = defineTable({
  columns: {
    ip: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { UserData }
});
