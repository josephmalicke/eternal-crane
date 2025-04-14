import * as migration_20250414_010604 from './20250414_010604';

export const migrations = [
  {
    up: migration_20250414_010604.up,
    down: migration_20250414_010604.down,
    name: '20250414_010604'
  },
];
