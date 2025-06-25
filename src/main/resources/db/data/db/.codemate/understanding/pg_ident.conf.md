# High-Level Documentation: PostgreSQL User Name Maps File

## Purpose
This configuration file is used by PostgreSQL to control the mapping of external (system) user names to PostgreSQL user accounts for authentication purposes. It enables administrators to specify which system users are allowed to connect as which PostgreSQL users.

## Core Functionality

- **Mapping Records:**  
  Each record defines a mapping between:
  - A *map name* (referenced in `pg_hba.conf`)
  - A *system (client) user name* (the user name reported by the client system)
  - A *PostgreSQL user name* (the intended PostgreSQL account)
  
- **Syntax:**  
  ```
  MAPNAME  SYSTEM-USERNAME  PG-USERNAME
  ```
  - `MAPNAME`: Arbitrary map name used in `pg_hba.conf`
  - `SYSTEM-USERNAME`: Name of the user connecting from the client system
    - May be a literal name or a regular expression (if it begins with `/`)
  - `PG-USERNAME`: Allowed PostgreSQL user (may be a name, "all", group, or regular expression)
    - If SYSTEM-USERNAME is a regex with a capture group, that value can be inserted in PG-USERNAME using `\1`.
    - Groups are prefixed with `+` (i.e. `+groupname`).

- **Usage in Authentication:**  
  The system allows an external user name, if mapped, to connect as the corresponding PostgreSQL user specified in the mapping.

## Advanced Features

- **Regular Expressions:**  
  SYSTEM-USERNAME can be a regex for pattern matching. PG-USERNAME may also be a regex or include substitutions (`\1`) from SYSTEM-USERNAME matches.

- **Inclusion Directives:**  
  The file supports including additional files or directories via:
  - `include FILE`
  - `include_if_exists FILE`
  - `include_dir DIRECTORY`
  These accept absolute or relative paths. For directories, only `.conf` files are included in alphabetical order.

## Other Notes

- If all system and PostgreSQL usernames match, you don't need any mapping.
- No map names are present by default; configurations must be added as needed.
- The file is re-read on server reload (SIGHUP to the postmaster, e.g., via `pg_ctl reload`).

## When and How to Update

- This file is read on server startup and reload.
- Editing requires a SIGHUP signal to the server process for changes to take effect.

---
**In Summary:**  
This file offers a flexible mechanism for mapping external OS/authentication user names to PostgreSQL users, including support for regex, groups, and configuration inclusion. It is referenced for client authentication and needs to be reloaded after modification.