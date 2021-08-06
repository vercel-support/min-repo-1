import { objectType } from 'nexus'

export const FinancialRecordType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FinancialRecordType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountRecordType', {
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
        return root.FinancialAccountRecordType
      },
    })
    t.nullable.field('_count', {
      type: 'FinancialRecordTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
