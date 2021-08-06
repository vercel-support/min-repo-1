import { objectType } from 'nexus'

export const FinancialAccountRole = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FinancialAccountRole',
  definition(t) {
    t.string('id')
    t.nullable.boolean('active')
    t.nullable.string('createdById')
    t.nullable.boolean('editable')
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.string('name')
    t.nullable.field('startDate', { type: 'DateTime' })
    t.list.field('FinancialAccountRole', {
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
        return root.FinancialAccountRole
      },
    })
    t.nullable.field('_count', {
      type: 'FinancialAccountRoleCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
