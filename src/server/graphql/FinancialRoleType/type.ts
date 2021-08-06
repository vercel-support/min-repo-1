import { objectType } from 'nexus'

export const FinancialRoleType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FinancialRoleType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
  },
})
