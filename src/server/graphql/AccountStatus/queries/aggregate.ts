import { queryField, list } from 'nexus'

export const AccountStatusAggregateQuery = queryField(
  'aggregateAccountStatus',
  {
    type: 'AggregateAccountStatus',
    args: {
      where: 'AccountStatusWhereInput',
      orderBy: list('AccountStatusOrderByInput'),
      cursor: 'AccountStatusWhereUniqueInput',
      distinct: 'AccountStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.accountStatus.aggregate({ ...args, ...select }) as any
    },
  },
)
