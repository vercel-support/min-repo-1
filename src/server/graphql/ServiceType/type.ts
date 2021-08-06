import { objectType } from 'nexus'

export const ServiceType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ServiceType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountServiceType', {
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
        return root.FinancialAccountServiceType
      },
    })
    t.nullable.field('_count', {
      type: 'ServiceTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
