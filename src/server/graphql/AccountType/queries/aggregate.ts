import { queryField, list } from 'nexus'

export const AccountTypeAggregateQuery = queryField('aggregateAccountType', {
  type: 'AggregateAccountType',
  args: {
    where: 'AccountTypeWhereInput',
    orderBy: list('AccountTypeOrderByInput'),
    cursor: 'AccountTypeWhereUniqueInput',
    distinct: 'AccountTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.accountType.aggregate({ ...args, ...select }) as any
  },
})
