import { objectType } from 'nexus'

export const OwnershipType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OwnershipType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountOwnership', {
      type: 'FinancialAccount',
      args: {
        where: 'FinancialAccountWhereInput',
        orderBy: 'FinancialAccountOrderByInput',
        cursor: 'FinancialAccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountOwnership
      },
    })
    t.nullable.field('_count', {
      type: 'OwnershipTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
