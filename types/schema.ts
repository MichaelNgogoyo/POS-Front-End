import type { File, User } from './system'

/** Directus Schema for SDK */
export interface Schema {
  // System
  directus_files: File[]
  directus_users: User[]
}
